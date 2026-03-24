import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoDev — Digital Solutions for Real Business Problems",
  description:
    "GoDev builds websites, systems, chatbots, and automation tailored to your business. We solve real business problems with digital solutions.",
  keywords: "web development, digital solutions, business automation, chatbots, custom systems, e-commerce",
  openGraph: {
    title: "GoDev — Digital Solutions for Real Business Problems",
    description: "We solve real business problems with digital solutions.",
    siteName: "GoDev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07070f] text-slate-100">
        {children}
      </body>
    </html>
  );
}
