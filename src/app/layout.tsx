import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "~/components/sections/Header";
import React from "react";
import Footer from "~/components/sections/Footer";

export const metadata: Metadata = {
  title: "News",
  description: "See latest news from your favorite sources",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${GeistSans.variable}`}>
      <body>
        <div className={"grid min-h-screen grid-rows-[auto_1fr_auto]"}>
          <Header />
          <main className={"flex flex-col items-center gap-10 sm:gap-20"}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
