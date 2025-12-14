import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azizur Rahaman | Frontend Developer",
  description: "Portfolio built with Next.js, Tailwind, and Framer Motion.",
  keywords: ['Frontend Developers, "React', "Next.js", "TypeScript", "Bangladesh"],
  openGraph: {
    title: "Azizur Rahaman | Frontend Developer",
    description: "Modern Portfolio with Next.js + Tailwind",
    url: "https://your-domain.vercel.app",
    siteName: "Azizur Portfolio",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Azizur Portfolio"}],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    "title": "Azizur Rahaman | Frontend Developer",
    images: ['/og.jpg'],
    creator: '@your_handle'
  },
  alternates: { canonical: 'https://your-domain.vercel.app' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar />
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
