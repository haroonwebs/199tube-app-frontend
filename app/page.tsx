"use client";
import VideoCard from "./components/VideoCard";
import { FetchVideos } from "./apiData/fetchVideos";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isPending, data, error } = useQuery({
    queryKey: ["videos"],
    queryFn: FetchVideos,
  });

  if (isPending) return <h1 className="text-white text-2xl">Loading ....</h1>;
  if (error) return <h2 className="text-white text-2xl">{error?.message}</h2>;
  if (data) return <h1 className="text-white text-2xl">{data?.message}</h1>;

  return (
    <div className="flex justify-start items-start">
      <VideoCard />
    </div>
  );
}
