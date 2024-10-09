import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: ["300", "400", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Daily Challenge",
  description: "Unique, daily challenges for self-improvement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.className}`}>
        <main>
          <div className="h-dvh max-w-lg m-auto flex p-2">
            <div className="m-auto flex flex-col gap-2">
              <header className="bg-black text-white p-2 dark:bg-white dark:text-black">
                <h1 className="text-3xl">The Daily Challenge</h1>
                <p>Unique, daily challenges for self-improvement.</p>
              </header>
              <div>
                <ul className="flex gap-2 justify-end">
                  <li className="text-black underline dark:text-white">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="text-black underline dark:text-white">
                    <Link href="/account">Account</Link>
                  </li>
                  <li className="text-black underline dark:text-white">
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </div>
              {children}
              <footer className="bg-slate-700 text-white p-2 text-center">
                <p>Made with ❤️ by Rafael Negron</p>
              </footer>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
