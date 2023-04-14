import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

let headers = {};
let token = null;
if (Cookies.get("token")) {
  token = "Bearer " + Cookies.get("token");
}

headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "X-Requested-With": "XMLHttpRequest",
  withCredentials: true,
  Authorization: token,
};

export function useAxiosGet(url) {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(url, headers)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, [url]);
  return data;
}
