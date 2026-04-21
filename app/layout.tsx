import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ChatWidget from "./components/chat-widget";
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
  title: "Kholekile Mpengesi | Portfolio",
  description: "Portfolio website for Kholekile Mpengesi, Full-Stack Developer and Data Analytics professional.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <header className="border-b border-zinc-200/80 bg-white/90 dark:border-zinc-800 dark:bg-zinc-950/90">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-tight">
              Kholekile Mpengesi
            </Link>
            <ul className="flex items-center gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
              <li>
                <Link href="/" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
