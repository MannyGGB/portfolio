import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MannyGGB - Portfolio",
  description: "A portfolio site showcasing my personal projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
