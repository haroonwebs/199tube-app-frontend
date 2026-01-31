import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ReduxProvider from "./StoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        {/* Header */}
        <Header />

        {/* Layout below header */}
        <div className="flex h-[calc(100vh-60px)]">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="flex flex-col px-5 py-5 gap-6 w-screen bg-[#000812]">
            <ReduxProvider>
              <QueryClientProvider client={queryClient}>
                <Navbar />
                {children}
              </QueryClientProvider>
            </ReduxProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
