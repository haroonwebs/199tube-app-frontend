"use client";
import { useQuery } from "@tanstack/react-query";
import { FetchUserSubscriptions } from "../apiData/fetchUserSubscriptions";

const contact = () => {
  const subscriberId = "696fdcc6a1c250fa369a960a";

  const { data, isLoading, error } = useQuery({
    queryKey: ["subscriber", subscriberId],
    queryFn: () => FetchUserSubscriptions(subscriberId),
  });

  return (
    <div className="flex justify-center items-center text-2xl text-white min-h-screen">
      <h1>contact us </h1>
    </div>
  );
};

export default contact;
