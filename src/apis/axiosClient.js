import axios from "axios";
import { alertError } from "./sweetAlert2";

const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MyIsIkhldEhhblN0cmluZyI6IjMwLzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNDQzNTIwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzE0NTgyODAwfQ.vnuwKd2yPstVSFqQxog9sPBbe9pu5_XdZksPn83M0Hs",
  },
});

axiosClient.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const noiDungLoi = error?.response?.data?.content;
    alertError(noiDungLoi);
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/signin";
    }
  }
);

export default axiosClient;
