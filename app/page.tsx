"use client";
import ProductCard from "./components/ProductCard";
import { FetchVideos } from "./apiData/fetchVideos";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/LoadingSpinner";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      {/* <LoadingSpinner /> */}
      <ProductCard />
    </div>
  );
}
