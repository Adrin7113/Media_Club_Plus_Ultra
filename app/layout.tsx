import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { RadioContextProvider } from "@/context/radioContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media Club",
  description: "The MITS Media Club Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RadioContextProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </RadioContextProvider>
    </html>
  );
}
