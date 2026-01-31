"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const user = localStorage.getItem("user");

  console.log(user);

  return (
    <div className="flex justify-between items-center px-5 h-15 bg-[#0E0E0F] text-xl text-white">
      <Link href={"/"}>
        <Image
          className=" rounded-lg object-cover border-0 hover:border-2 hover:border-amber-50"
          src="/199tube-logo.webp"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>
      {user ? (
        <Link href={"/user-dashboard"}>
          <Image
            className=" rounded-lg object-cover border-0 hover:border-2 hover:border-amber-50"
            src="/haroon.jpg"
            alt="Banner"
            width={50}
            height={50}
          />
        </Link>
      ) : (
        <Link href={"/auth/login"}>Login</Link>
      )}
    </div>
  );
};

export default Header;
