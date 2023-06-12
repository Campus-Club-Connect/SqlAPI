import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://clubcampusconnect.onrender.com/api/",
  withCredentials: true,
});
