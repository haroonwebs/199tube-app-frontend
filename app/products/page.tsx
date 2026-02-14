import ProductCard from "../components//ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      {/* <LoadingSpinner /> */}
      <ProductCard />
    </div>
  );
}
