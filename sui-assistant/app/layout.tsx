import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Sui Assistant 🤖 - Help Developers to Build on Sui 👨‍💻 - For Sui Ecosystem ✨",
  description:
    "Sui is an AI chatbot trained on Sui Blockchain and its ecosystem data to help developers build on top of Sui.",
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
