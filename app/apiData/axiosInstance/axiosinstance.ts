import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://13.61.7.100:8000/api/v1",
  withCredentials: true,
});
