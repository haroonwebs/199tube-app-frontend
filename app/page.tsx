import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import VideoCard from "./components/VideoCard";
export default function Home() {
  return (
    <div className="flex justify-start items-start bg-[#000812]">
      <Sidebar />
      <div className="flex flex-col gap-6 px-5 py-5">
        <Navbar />
        <VideoCard />
      </div>
    </div>
  );
}
