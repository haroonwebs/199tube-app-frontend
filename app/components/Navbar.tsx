"use client";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { ImageUp } from "lucide-react";
import { useState } from "react";
import PostVideoFormPopUp from "./PostVideoFormPopUp";

const Navbar = () => {
  const [openVideoForm, setOpenVideoForm] = useState(false);
  const pathname = usePathname();

  if (pathname === "/auth/login" || pathname === "/auth/signup") {
    return null;
  }

  return (
    <>
      <nav className="flex justify-between items-center text-sm text-white w-[70vw]">
        <div className="flex justify-center items-center w-[50%] p-1 border rounded-sm">
          <Search />
          <input
            className="w-full py-1 px-3 outline-none"
            type="text"
            placeholder="search"
          />
        </div>

        {pathname === "/your-videos" && (
          <button
            onClick={() => setOpenVideoForm(true)}
            className="flex gap-1 bg-white text-black p-2 rounded-3xl hover:bg-amber-100 hover:cursor-pointer"
          >
            Post <ImageUp />
          </button>
        )}
      </nav>

      {openVideoForm && pathname === "/your-videos" && (
        <PostVideoFormPopUp onClose={() => setOpenVideoForm(false)} />
      )}
    </>
  );
};

export default Navbar;
