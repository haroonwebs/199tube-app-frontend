"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Logout } from "../apiData/logout";
import { useRouter } from "next/navigation";

const Header = () => {
  const [user, setUser] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: Logout,
    onSuccess: () => {
      queryClient.clear();
      router.push("/login");
    },
  });

  const handleLogout = () => {
    mutate();
  };

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
        <div>
          <Link href={"/user-dashboard"}>
            <Image
              className=" rounded-lg object-cover border-0 hover:border-2 hover:border-amber-50"
              src="/haroon.jpg"
              alt="Banner"
              width={50}
              height={50}
            />
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link href={"/auth/login"}>Login</Link>
      )}
    </div>
  );
};

export default Header;
