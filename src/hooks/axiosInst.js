import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_API_URL;
import { axiosHeaders } from '@helpers/axiosHeaders';


// let headers = {};
// let token = null;
// if (Cookies.get("token")) {
//   token = "Bearer " + Cookies.get("token");
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//   headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   };

const headers = axiosHeaders();
const axiosInst = axios.create({
  headers,
});

export default axiosInst;
