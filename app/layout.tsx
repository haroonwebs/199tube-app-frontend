import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ReduxProvider from "./StoreProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

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
      <body
        className={`${inter.variable} ${roboto.variable} flex flex-col min-h-screen`}
      >
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
            <main className="min-h-screen bg-linear-to-r from-black to-blue-950">
              {children}
            </main>
            <Footer />
          </ReduxProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
