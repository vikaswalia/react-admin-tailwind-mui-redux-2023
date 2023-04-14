import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

let headers = {};
let token = null;

// const headers = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
//   "Access-Control-Allow-Origin": "*",
//   "X-Requested-With": "XMLHttpRequest",
// };
headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  // "Accept-Charset": "application/json",
  // withCredentials: true,
  // "Access-Control-Allow-Origin": "*",
  // "X-Requested-With": "XMLHttpRequest",
};
const BASE_URL = process.env.REACT_APP_API_URL;
const useAxiosPost = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); //different!
  const [controller, setController] = useState();

  const axiosPost = async (configObj) => {
    if (Cookies.get("token")) {
      token = Cookies.get("token");
    }
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const { url } = configObj;
    headers = {
      ...headers,
      Authorization: "Bearer " + token,
    };
    console.log("headers from useAxiosPost ", headers);
    // await axios.get("/sanctum/csrf-cookie");

    try {
      const res = await axios.post(url, headers);
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

  return [response, error, loading, axiosPost];
};

export default useAxiosPost;
