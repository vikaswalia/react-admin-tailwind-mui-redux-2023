import React from "react";
import Cookies from "js-cookie";
import axios from "axios";


export function axiosHeaders() {
  let headers = {}
  let token = null;
  // "Access-Control-Allow-Origin": "*",
    // "X-Requested-With": "XMLHttpRequest",
		// "Access-Control-Allow-Origin": "*",
		// // "X-Requested-With": "XMLHttpRequest",
		// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  // headers = {
  //   baseURL : process.env.REACT_APP_API_URL,
  //   'Content-Type': 'application/json',
  //   // "X-Requested-With": "XMLHttpRequest",
  //   // "Access-Control-Allow-Origin": "*",
  //   Accept: 'application/json',
  //   // 'Content-Type': 'multipart/form-data',
  // };
  
  if (Cookies.get('token')) {
    token = Cookies.get('token');
    
    // axios.defaults.withCredentials = true;
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    headers = {
      // baseURL : process.env.REACT_APP_API_URL,
      'Content-Type': 'application/json',
      // "X-Requested-With": "XMLHttpRequest",
      // "Access-Control-Allow-Origin": "*",
      Accept: 'application/json',
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    };
  } else {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;

    headers = {
      // baseURL : process.env.REACT_APP_API_URL,
      'Content-Type': 'application/json',
      // "X-Requested-With": "XMLHttpRequest",
      // "Access-Control-Allow-Origin": "*",
      Accept: 'application/json',
      // 'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${token}`
    };
  }
  return headers;
}
