import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "SuiGPT 🤖 - Help Developers to Build on Sui 👨‍💻 - For Sui Ecosystem ✨",
  description:
    "Sui is an AI ChatBot trained on Sui Blockchain & It's Ecosystem Data to help Developers to build on the top of Sui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
