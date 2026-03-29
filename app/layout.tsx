import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactWidget from "@/components/ContactWidget";

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
      <body className="antialiased min-h-screen">
        <Navbar />
        <ContactWidget />
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
