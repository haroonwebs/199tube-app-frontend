"use client";
import { useQuery } from "@tanstack/react-query";
import { FetchUserSubscriptions } from "../apiData/fetchUserSubscriptions";

const contact = () => {
  const subscriberId = "696fdcc6a1c250fa369a960a";

  const { data, isLoading, error } = useQuery({
    queryKey: ["subscriber", subscriberId],
    queryFn: () => FetchUserSubscriptions(subscriberId),
  });

  if (error?.message)
    return <h1 className="text-2xl text-white">{error?.message}</h1>;

  return isLoading ? (
    <h1 className="text-2xl text-white">Loading...</h1>
  ) : (
    <div className="text-2xl text-white">
      <h1>{data?.message}</h1>
    </div>
  );
};

export default contact;
