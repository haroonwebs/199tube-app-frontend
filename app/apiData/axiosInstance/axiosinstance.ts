import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://imperialistic-maida-combinedly.ngrok-free.dev/api/v1",
  withCredentials: true,
});
