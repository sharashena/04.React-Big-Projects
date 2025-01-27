import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const baseURL = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
  },
});

baseURL.interceptors.request.use(
  request => {
    request.headers.Authorization = `Bearer ${accessToken}`;
    return request;
  },
  err => Promise.reject(err)
);

baseURL.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err.status === 401) {
      console.log("Unauthorized");
    }
    return Promise.reject(err);
  }
);
