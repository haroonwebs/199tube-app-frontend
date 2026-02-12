"use client";
import Image from "next/image";
import Link from "next/link";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Logout } from "../apiData/logout";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { logout } from "../store/slices/authSlice";
import { toast } from "react-toastify";

const Header = () => {
  const user = useAppSelector((state) => state?.user);
  const dispatch = useAppDispatch();

  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: Logout,
    onSuccess: (data) => {
      console.log("data", data);
      toast.success(data?.message);
      queryClient.clear();
      router.push("/auth/login");
    },
  });

  const handleLogout = async () => {
    mutate();
    dispatch(logout());
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
      {user?.user !== null ? (
        <div className="flex gap-2">
          <button onClick={handleLogout} disabled={isPending}>
            {" "}
            {isPending ? "Logging out..." : "Logout"}
          </button>
          <Link href={"/user-dashboard"}>
            <Image
              className=" rounded-lg object-cover border-0 hover:border-2 hover:border-amber-50"
              src="/haroon.jpg"
              alt="Banner"
              width={50}
              height={50}
            />
          </Link>
        </div>
      ) : (
        <Link href={"/auth/login"}>Login</Link>
      )}
    </div>
  );
};

export default Header;
