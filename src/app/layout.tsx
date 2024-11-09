import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from "next/font/google"
import { SessionProvider } from "next-auth/react"

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
      <SessionProvider>
      <body className="min-h-screen flex flex-col font-montserrat">
        {children}
      </body>
      </SessionProvider>
    </html>
  );
}
