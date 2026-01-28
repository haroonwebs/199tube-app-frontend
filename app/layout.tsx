import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "199tube-intertainment",
  description: "app to explore videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
