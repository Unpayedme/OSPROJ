"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  const router = useRouter();
  const handleProject = () => {
    router.push('/projects');
  };

  const handleHome = () => {
    router.push('/');
  };
  
  
  return (
    <html lang="en">
      <head>
        <title>My Profile</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen p-0 m-0`}
      >
        <header className="border border-black-500 w-full h-[10%] flex flex-row-reverse bg-black flex-center pr-20 pl-20 items-center">
          <Button variant="link" className="text-white text-xl" onClick={handleProject}>PROJECTS</Button>
          <Button variant="link" className="text-white text-xl">CONTACTS</Button>
          <Button variant="link" className="text-white text-xl">PORTFOLIO</Button>
          <Button variant="link" className="text-white text-xl">ABOUT</Button>
          <Button variant="link" className="text-white text-xl" onClick={handleHome}>HOME</Button>
          <h1 className="text-white text-2xl grow">My Personal Profile</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
