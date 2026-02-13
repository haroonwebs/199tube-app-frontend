import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ReduxProvider from "./StoreProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "199tube-intertainment",
  description: "app to explore videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
        {/* Header */}
        <ReactQueryProvider>
          <ReduxProvider>
            <Header />
            <div>
              <main className="flex flex-col gap-2  h-[calc(100vh-60px)] w-screen bg-[#000812]">
                {children}
              </main>
            </div>
          </ReduxProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
