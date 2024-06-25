import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * TODO: select a font
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
 */
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
