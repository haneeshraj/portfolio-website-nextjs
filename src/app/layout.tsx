import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer/Footer";

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff",
  variable: "--font-clash-display",
  weight: "100 900",
});

const clashDisplay2 = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Haneesh Raj B.",
  description:
    "Banisetti Haneesh Raj is a machine learning engineer, data scientist, and full stack web developer. He has been working on building intelligent systems, developing scalable web applications, and analyzing data for actionable insights. He has a strong background in computer science, mathematics, and statistics. Working on serveral projects based on serveral fields like E-commerce web application, desktop applications, data analytics, LLMs, computer vision, freelance portfolio websites for several clients and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setInitialTheme = `
    (function() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      }
    })();
  `;
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className={`${clashDisplay.className} ${clashDisplay2.className}`}>
        <div className="content">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
