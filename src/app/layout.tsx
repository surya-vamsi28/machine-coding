import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Header from "@/components/header";

import Providers from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Header />
          <div className={styles.bodyWrapper}>{children}</div>
        </body>
      </Providers>
    </html>
  );
}
