"use client";
import { useRef } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { RegisterUser } from "@/app/apiData/registerUser";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: RegisterUser,
    onSuccess: () => {
      toast.success("Account created successfully");
      router.push("/auth/login");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Signup failed");
    },
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("username", usernameRef.current?.value || "");
    formData.append("email", emailRef.current?.value || "");
    formData.append("password", passwordRef.current?.value || "");

    if (avatarRef.current?.files?.[0]) {
      formData.append("avatar", avatarRef.current.files[0]);
    }
    mutate(formData);
  };

  return (
    <div className="flex items-center justify-center p-2 sm:p-0 mt-10 sm:mt-20 sm:ml-100">
      <div className="w-full max-w-sm bg-linear-to-r from-blue-800 to-gray-800 rounded-2xl shadow-2xl p-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="text-sm text-gray-300 mt-1">
            Join us and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-sm font-semibold text-white">Username</label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="yourname"
                required
                ref={usernameRef}
                className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none text-white focus:ring-1 focus:ring-white focus:border-0"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">👤</span>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-white">
              Email Address
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                placeholder="you@example.com"
                required
                ref={emailRef}
                className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none text-white focus:ring-1 focus:ring-white focus:border-0"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">📧</span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-white">Password</label>
            <div className="relative mt-1">
              <input
                type="password"
                placeholder="••••••••"
                required
                ref={passwordRef}
                className="w-full pl-10 pr-3 py-2 border rounded-lg outline-none text-white focus:ring-1 focus:ring-white focus:border-0"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>
            </div>
          </div>
          {/* choose avatar */}
          <div>
            <label className="text-sm font-semibold text-white">Avatar</label>
            <div className="relative mt-1">
              <input
                type="file"
                placeholder="chose avatar image"
                required
                ref={avatarRef}
                className="w-full px-2 border rounded-lg outline-none text-white focus:ring-1 focus:ring-white focus:border-0"
              />
            </div>
          </div>

          {/* Login link */}
          <p className="text-sm text-center text-gray-300">
            Already have an account?
            <Link
              href="/auth/login"
              className="text-indigo-600 font-semibold ml-1 hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-black to-gray-600 text-white py-2 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-md"
          >
            {isPending ? "Sending" : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
