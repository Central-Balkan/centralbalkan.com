import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Централен Балкан | Метални изделия",
  description:
    "Производство на метални изделия - основи за мебели, метални планки и много други.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={inter.className}>
      <body className="antialiased" style={{ minHeight: "200vh" }}>
        <Image
          className="absolute w-full h-screen object-cover"
          src="/background.png"
          alt="CNC лазерно рязане"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
