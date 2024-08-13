import type { Metadata } from "next";
import Favicon from './favicon.ico';
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Z górą w tle",
  description: "",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head> */}
      <body className="tracking-[.2rem] font-normal bg-black text-neutral-300">
        <main className={openSans.className}>
         {children}
        </main>
      </body>
    </html>
  );
}
