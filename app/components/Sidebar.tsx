import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-4 h-[cal(100vh-60px)] w-[30vh] bg-[#0E0E0F] py-5 ">
      <Link href={"/"} className="text-sm  text-white  hover:text-amber-100">
        Home
      </Link>
      <Link
        href={"/subscriptions"}
        className="text-sm text-white  hover:text-amber-100 hover:text-[16px]"
      >
        Subscriptions
      </Link>
      <Link
        href={"/history"}
        className="text-sm  text-white  hover:text-amber-100 hover:text-[16px]"
      >
        History
      </Link>
      <Link
        href={"your-videos"}
        className="text-sm  text-white  hover:text-amber-100 hover:text-[16px]"
      >
        Your Videos
      </Link>
    </div>
  );
};

export default Sidebar;
