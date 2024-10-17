import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Project 1",
  description: "Project 1 landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-Mons antialiased scrollbar-hide`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
