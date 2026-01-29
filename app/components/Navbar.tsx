import { Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-sm text-white w-[80vw]">
      <div className="flex justify-start gap-6 items-center w-[30%]">
        <Link className="bg-[#424242] border rounded-2xl p-1" href={"/"}>
          All
        </Link>
        <Link
          className="bg-[#424242] border rounded-2xl p-1"
          href={"/channels"}
        >
          Channels
        </Link>
        <Link
          className="bg-[#424242] border rounded-2xl p-1"
          href={"/playlists"}
        >
          Playlists
        </Link>
      </div>
      <div className="flex justify-center items-center w-[50%] p-1 border rounded-sm">
        <Search />
        <input
          className="w-full py-1 px-3 outline-none"
          type="text"
          placeholder="search"
        />
      </div>
    </nav>
  );
};

export default Navbar;
