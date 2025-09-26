import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rede Mobilize",
  description: "Instituto de ativismo comunitário rede mobilize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${quickSand.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
