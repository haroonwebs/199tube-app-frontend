import { axiosInstance } from "./axiosInstance/axiosinstance";

export const FetchVideos = async () => {
  const res = await axiosInstance.get("/videos/");
  return res.data;
};
