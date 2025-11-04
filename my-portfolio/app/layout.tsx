import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik} from "next/font/google";
import "./globals.css";
import "./components/navbar"
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rubikOne = Rubik({
  subsets: ["latin"],
  weight: ["400","700"]  // choose weights that fit your design
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zach's Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body className={`${rubikOne.className} antialiased bg-black`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}