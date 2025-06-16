import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatBotComWidget from "@/components/chatbot";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wisata Jogja - Pesona Istimewa",
  description: "Jelajahi keindahan dan pesona wisata Yogyakarta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} dark:bg-gray-900`}>
        {children}
        <ChatBotComWidget />
      </body>
    </html>
  );
}