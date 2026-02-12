"use client";
import { useRef } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { LoginUser } from "@/app/apiData/loginUser";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { setUser } from "@/app/store/slices/authSlice";
import { useAppDispatch } from "@/app/store/hooks/hooks";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { mutate, isPending, error } = useMutation({
    mutationFn: LoginUser,
    onSuccess: (data) => {
      dispatch(setUser(data?.data?.LoggedInUser));
      if (emailRef?.current?.value) emailRef.current.value = "";
      if (passwordRef?.current?.value) passwordRef.current.value = "";
      toast.success(data?.message || "User login successfully");
      router.push("/");
    },
    onError: (err: any) => {
      toast.error(err?.message || "Signup failed");
    },
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const userData = {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    };

    mutate(userData);
  };

  return (
    <div className="flex items-center justify-center mt-20 ml-100">
      <div className="w-full max-w-sm bg-linear-to-r from-white to-gray-400 rounded-2xl shadow-2xl p-4 animate-fadeIn">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-500 mt-1">
            Login to continue your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Email Address
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                placeholder="you@example.com"
                required
                ref={emailRef}
                className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none focus:ring-1 focus:ring-gray-800 focus:border-black"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">📧</span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                placeholder="••••••••"
                required
                ref={passwordRef}
                className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none focus:ring-1 focus:ring-gray-800 focus:border-black"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>
            </div>
          </div>

          {/* Signup */}
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?
            <Link
              href="/auth/signup"
              className="text-blue-600 font-semibold ml-1 hover:underline"
            >
              Sign up
            </Link>
          </p>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-black to-gray-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-md"
          >
            {isPending ? "Sending" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
