import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrickReel – Real Estate Video Analysis",
  description:
    "AI-powered platform that analyzes real estate video content and provides actionable insights to improve engagement and lead generation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </span>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                BrickReel
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-500">
              <Link href="/" className="hover:text-gray-900 transition">
                Analyze
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} BrickReel. All rights reserved.</p>
            <p>Built for real estate professionals.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
