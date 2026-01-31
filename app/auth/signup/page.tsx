"use client";
import { useRef } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const userData = {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
      username: usernameRef?.current?.value,
    };
  };

  return (
    <div className="flex items-center justify-center mt-20 ml-100">
      <div className="w-full max-w-sm bg-linear-to-r from-white to-gray-400 rounded-2xl shadow-2xl p-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-sm text-gray-500 mt-1">
            Join us and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Username
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="yourname"
                required
                ref={usernameRef}
                className="w-full pl-10 pr-3 py-2 bg-gray-100 border rounded-lg outline-none focus:ring-1 focus:ring-gray-800 focus:border-black"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">👤</span>
            </div>
          </div>

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
                className="w-full pl-10 pr-3 py-2 bg-gray-100 border rounded-lg outline-none focus:ring-1 focus:ring-gray-800 focus:border-black"
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
                className="w-full pl-10 pr-3 py-2 bg-gray-100 border rounded-lg outline-none focus:ring-1 focus:ring-gray-800 focus:border-black"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>
            </div>
          </div>

          {/* Login link */}
          <p className="text-sm text-center text-gray-600">
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
