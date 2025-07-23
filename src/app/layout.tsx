import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from './components/Navbar'
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
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
      <body className={`${geist.className} antialiased`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
