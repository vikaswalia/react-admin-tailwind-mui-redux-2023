import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

let headers = {};
let token = null;

headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Accept-Charset": "application/json",
  withCredentials: true,
  "Access-Control-Allow-Origin": "*",
  "X-Requested-With": "XMLHttpRequest",
};
const BASE_URL = process.env.REACT_APP_API_URL;
const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); //different!
  const [controller, setController] = useState();

  const axiosFetch = async (configObj) => {
    if (Cookies.get("token")) {
      token = Cookies.get("token");
    }
    if (Cookies.get("token")) {
      token = Cookies.get("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.withCredentials = true;
    
    const { url, method } = configObj;
    console.log("headers from useAxiosFunction ", headers);
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axios[method.toLowerCase()](url, {
        ...requestConfig,
        headers,
        baseURL: BASE_URL,
        signal: ctrl.signal,
      });
      // console.log("response from useAxiosFunction ", res);
      setResponse(res.data);
      return res.data;
    } catch (err) {
      // console.log("error from useAxiosFunction ", err);
      setError(err);
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
