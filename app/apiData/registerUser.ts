import { axiosInstance } from "./axiosInstance/axiosinstance";

export const RegisterUser = async (userData: any) => {
  const res = await axiosInstance.post("/users/register", userData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
