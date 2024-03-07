import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
});
