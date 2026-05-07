"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ShoppingBasket, X } from "lucide-react";
import { useAppSelector } from "../store/hooks/hooks";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const cartItems = useAppSelector((state) => state?.cart?.cartItems || []);
  const user = useAppSelector((state) => state.user.user);
  // const user = null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideDropdown = dropdownRef.current?.contains(target);
      const isInsideSidebar = sidebarRef.current?.contains(target);

      if (!isInsideDropdown && !isInsideSidebar) {
        setOpenDropdown(false);
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative bg-linear-to-r from-black to-blue-950 text-white fixed w-full z-20 top-0 start-0">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-blue-600">
            OutfitZone
          </span>
        </Link>

        {/* Right Side */}
        <div
          className="flex items-center md:order-2 space-x-3 relative"
          ref={dropdownRef}
        >
          {/* Desktop User Dropdown */}
          {user ? (
            <>
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => !prev)}
                className="hidden md:flex text-sm rounded-full"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="/199tube-logo.webp"
                  alt="user"
                />
              </button>

              {openDropdown && (
                <div className="absolute right-0 top-12 z-50 border rounded shadow-lg w-44 bg-linear-to-r from-black to-blue-950">
                  <div className="px-4 py-3 text-sm border-b border-gray-700">
                    <span className="block font-medium">{user.fullName}</span>
                    <span className="block truncate">{user?.email}</span>
                  </div>

                  <ul className="p-2 text-sm">
                    <li>
                      <Link
                        href="/user-dashboard"
                        className="block p-2 hover:text-blue-600"
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/settings"
                        className="block p-2 hover:text-blue-600"
                      >
                        Settings
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/logout"
                        className="block p-2 hover:text-red-600"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <ul className="font-medium flex flex-row space-x-8">
              <li>
                <Link
                  href="/auth/login"
                  className="block hover:text-blue-600"
                  // onClick={() => setSidebarOpen(false)}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/auth/signup"
                  className="block hover:text-blue-600"
                  // onClick={() => setSidebarOpen(false)}
                >
                  Signup
                </Link>
              </li>
            </ul>
          )}

          {/* Mobile Cart */}
          <Link
            href="/cart"
            className="md:hidden flex gap-1 p-2 hover:text-blue-600"
          >
            <ShoppingBasket />
            {cartItems.length > 0 && (
              <span className="inline-flex items-center justify-center px-1 text-sm font-bold text-red-700 bg-amber-50 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:w-auto md:order-1">
          <ul className="font-medium flex flex-row space-x-8">
            <li>
              <Link href="/products" className="hover:text-blue-600">
                Products
              </Link>
            </li>

            <li>
              <Link href="/orders" className="hover:text-blue-600">
                Orders
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/cart" className="flex gap-1 hover:text-blue-600">
                Cart <ShoppingBasket />
                {cartItems.length > 0 && (
                  <span className="inline-flex items-center justify-center px-1 text-sm font-bold text-red-700 bg-amber-50 rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {sidebarOpen && (
        <div
          ref={sidebarRef}
          className="absolute top-full right-0 w-1/2 md:hidden bg-linear-to-r from-black to-blue-950 shadow-xl border-t border-gray-700"
        >
          <div className="p-4">
            <div className="flex justify-end mb-4">
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block hover:text-blue-600"
                  onClick={() => setSidebarOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="block hover:text-blue-600"
                  onClick={() => setSidebarOpen(false)}
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/orders"
                  className="block hover:text-blue-600"
                  onClick={() => setSidebarOpen(false)}
                >
                  Orders
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block hover:text-blue-600"
                  onClick={() => setSidebarOpen(false)}
                >
                  Contact
                </Link>
              </li>

              {user ? (
                <>
                  <li className="pt-4 border-t border-gray-700">
                    <p className="font-medium">{user.fullName}</p>
                    <p className="text-sm text-gray-300">{user.email}</p>
                  </li>

                  <li>
                    <Link
                      href="/user-dashboard"
                      className="block hover:text-blue-600"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/settings"
                      className="block hover:text-blue-600"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Settings
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/logout"
                      className="block hover:text-red-600"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Sign out
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/auth/login"
                      className="block hover:text-blue-600"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/auth/signup"
                      className="block hover:text-blue-600"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
