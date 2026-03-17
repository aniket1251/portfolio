import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { SmoothScroll, ScrollProgress } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";



const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Aniket Gautam | Software Developer",
  description:
    "Portfolio of Aniket Gautam, a passionate Software Developer skilled in React, Next.js, Node.js, and deep learning. Explore my projects, skills, and get in touch.",
  keywords: [
    "Aniket Gautam",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Aniket Gautam" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://aniket-portfolio.com/",
    title: "Aniket Gautam | Software Developer",
    description:
      "Explore my projects and skills as a Software Developer.",
    images: [
      {
        url: "https://aniket-portfolio.com/preview.png",
        width: 1200,
        height: 544,
        alt: "Aniket Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Gautam | Software Developer",
    description:
      "Software Developer skilled in React, Next.js, Node.js, and more.",
    images: ["https://aniket-portfolio.com/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#ff6b3d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-warm-50 text-warm-900 antialiased font-sans"
        )}
      >
        <CustomCursor />
        <SmoothScroll>
          <ScrollProgress />
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
