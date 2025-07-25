import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import OverlayMenu from "@/components/atoms/OverlayMenu";
import { Orbitron } from "next/font/google";

const orbit = Orbitron({
  subsets: ["latin"],
  variable: "--Orbitron",
  weight: ["400", "500", "600", "700", "800", "900"], // Choose the weights you need
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbit.variable} antialiased font-base`}>
        <div className="max-w-[1550px] mx-auto">
          <OverlayMenu></OverlayMenu>
        </div>
        {children}
        <div className="max-w-[1550px] mx-auto">
          <h1 className="text-2xl text-white">Layout footer</h1>
        </div>
      </body>
    </html>
  );
}
