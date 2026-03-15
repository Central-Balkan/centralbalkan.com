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
      <body className="antialiased">
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
        <footer className="w-full py-4 text-center text-sm text-darkSecondary opacity-80 border-t border-darkPrimary mt-16">
          <div>
            &copy; {new Date().getFullYear()} Централен Балкан ЕООД. Всички
            права запазени.
          </div>
        </footer>
      </body>
    </html>
  );
}
