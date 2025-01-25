import Head from "next/head";
import "./globals.css";
import { Outfit } from "next/font/google";
import Background from "@/components/Background";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "GameVault",
  description: "Your Ultimate Gaming Universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${outfit.variable} font-sans min-h-screen bg-[#0F1116] text-white overflow-x-hidden`}
      >
        <Background>{children}</Background>
      </body>
    </html>
  );
}
