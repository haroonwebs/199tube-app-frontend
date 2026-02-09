import { axiosInstance } from "./axiosInstance/axiosinstance";

export const UpdateCoverImage = async () => {
  const res = await axiosInstance.patch("/users/update-avatar-image", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
