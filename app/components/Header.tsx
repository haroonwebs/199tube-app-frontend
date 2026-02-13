"use client";
import Image from "next/image";
import Link from "next/link";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Logout } from "../apiData/logout";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../store/hooks/hooks";
import { logout } from "../store/slices/authSlice";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

const Header = () => {
  const user = useAppSelector((state) => state?.user);
  const dispatch = useAppDispatch();

  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: Logout,
    onSuccess: (data) => {
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
    <>
      <Navbar />
    </>
  );
};

export default Header;
