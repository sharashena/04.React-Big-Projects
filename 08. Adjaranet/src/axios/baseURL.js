import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: 'application/json'
  }
});