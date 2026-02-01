import { axiosInstance } from "./axiosInstance/axiosinstance";

export const LoginUser = async (userData: any) => {
  const res = await axiosInstance.post("/users/login", userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
