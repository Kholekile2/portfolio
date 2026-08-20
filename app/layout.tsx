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
  description: "Portfolio of Kholekile Mpengesi, Data Analytics and BI specialist and Full Stack Developer.",
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
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(246,244,238,0.86)] backdrop-blur-sm">
          <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
            <Link href="/" className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.12em] text-[var(--foreground)] transition-colors hover:text-[var(--sage-deep)]">
              Kholekile <span className="text-[var(--gold)]">Mpengesi</span>
            </Link>

            <ul className="flex items-center gap-5 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-[var(--ink-soft)]">
              <li>
                <Link href="/" className="border-b border-transparent pb-1 transition-colors hover:border-[var(--gold)] hover:text-[var(--foreground)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="border-b border-transparent pb-1 transition-colors hover:border-[var(--gold)] hover:text-[var(--foreground)]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="border-b border-transparent pb-1 transition-colors hover:border-[var(--gold)] hover:text-[var(--foreground)]">
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
