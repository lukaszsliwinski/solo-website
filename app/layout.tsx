import type { Metadata } from 'next';
import Favicon from './favicon.ico';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Z górą w tle',
  description: '',
  icons: [{ rel: 'icon', url: Favicon.src }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="tracking-[.3rem] font-normal bg-dark-bg text-main-text">
        <main className={openSans.className}>{children}</main>
      </body>
    </html>
  );
}
