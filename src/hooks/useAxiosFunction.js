import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

let headers = {};
let token = null;

headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  // "Accept-Charset": "application/json",
  // withCredentials: true,
  // "Access-Control-Allow-Origin": "*",
  // "X-Requested-With": "XMLHttpRequest",
};
const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); //different!
  const [controller, setController] = useState();

  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  const axiosFetch = async (configObj) => {
    if (Cookies.get("token")) {
      token = Cookies.get("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // axios.defaults.withCredentials = true;
    }

    

    const { method, url, requestConfig = {} } = configObj;
    console.log("headers from useAxiosFunction ", headers);
    console.log("data from useAxiosFunction ", data);
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axios[method.toLowerCase()](url, 
        {...requestConfig,
        headers,}
      );
      console.log("response from useAxiosFunction ", res);

      setResponse(res.data);
      return res.data;
    } catch (err) {
      // console.log("error from useAxiosFunction ", err);
      // setError(err);
      return err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log(controller);

    // useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxiosFunction;
