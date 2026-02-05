import { axiosInstance } from "./axiosInstance/axiosinstance";

export const FetchUserSubscriptions = async (
  subscriberId: string | undefined,
) => {
  const res = await axiosInstance.get(`/subscriptions/u/:${subscriberId}`, {
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res?.data) {
    throw new Error("Something went wrong while fetching Subscriptions");
  }

  return res.data;
};
