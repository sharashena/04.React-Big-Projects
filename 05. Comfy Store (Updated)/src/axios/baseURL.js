import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://course-api.com/",
  headers: {
    Accept: "application/json",
  },
});
