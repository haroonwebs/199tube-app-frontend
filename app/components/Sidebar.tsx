import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-4 h-screen w-[20%] bg-[#0E0E0F] text-sm text-white py-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/subscriptions"}>Subscriptions</Link>
      <Link href={"/histery"}>Histery</Link>
      <Link href={"your-videos"}>Your Videos</Link>
    </div>
  );
};

export default Sidebar;
