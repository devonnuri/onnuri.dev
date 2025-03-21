import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAdSense } from './google-adsense';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Huiseong Yang',
  description: 'Huiseong Yang - Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAdSense />
    </html>
  );
}
