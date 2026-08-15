import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sigey Kunpage Enoch | Business Computing Student",
  description:
    "Official personal website and portfolio of Sigey Kunpage Enoch, a Business Computing student at the University for Business and Integrated Development Studies (UBIDS), Ghana.",
  keywords: [
    "Sigey Kunpage Enoch",
    "Sigey Enoch",
    "Business Computing",
    "UBIDS",
    "Ghana",
    "Web Development",
    "Data Analysis",
    "Cybersecurity",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
