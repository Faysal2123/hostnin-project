import type { Metadata } from "next";
import { Geist, Urbanist, Mulish } from "next/font/google";
import Navbar from './layout/Navbar'
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Hostnin - Web Hosting Company",
  description: "Hostnin is a web hosting company that provides reliable and affordable web hosting services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${urbanist.variable} ${mulish.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
