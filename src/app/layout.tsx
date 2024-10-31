import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "By bootcamp 3.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col font-montserrat">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
