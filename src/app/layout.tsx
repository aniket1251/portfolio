import type { Metadata } from "next";
import {Inter , Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({subsets: ["latin"], variable: "--font-sans"});
const calistoga = Calistoga({
  subsets:["latin"],
  variable:"--font-serif",
  weight:["400"],
});


export const metadata: Metadata = {
  title: "Aniket Gautam | A Software Developer",
  description:
    "Portfolio of Aniket, a passionate Software Developer skilled in React, Next.js, Node.js, and deep learning. Explore my projects, skills, and contact me for collaborations.",
  keywords: [
    "Aniket",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "MERN Developer",
  ],
  authors: [{ name: "Aniket Gautam" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://aniket-portfolio.com/",
    title: "Aniket Gautam | A Software Developer",
    description:
      "Explore my projects and skills as a Software Developer. Let's build something amazing together.",
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
    title: "Aniket Gautam | A Software Developer",
    description:
      "Software Developer skilled in React, Next.js, Node.js, and more. Check out my portfolio.",
    images: ["https://aniket-portfolio.com/preview.png"],
  },
  icons: {
    icon: "/favicon10.ic0",
  },
  themeColor: "#10b981",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
