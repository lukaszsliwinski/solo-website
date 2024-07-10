import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Z górą w tle",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="h-[10000px] tracking-wider">
        <Navbar />
        <main className={openSans.className}>
         {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
