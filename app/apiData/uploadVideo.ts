import { axiosInstance } from "./axiosInstance/axiosinstance";

export const UploadVideo = async (data: any) => {
  const res = await axiosInstance.post("/videos/publishVideo", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
