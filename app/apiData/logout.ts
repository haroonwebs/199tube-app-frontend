import { axiosInstance } from "./axiosInstance/axiosinstance";

export const Logout = async () => {
  const res = await axiosInstance.post("/users/logout");
  return res;
};
