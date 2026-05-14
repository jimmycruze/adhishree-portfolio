import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "adhishree — makeup artist, mumbai",
  description: "Portfolio of Adhishree, Mumbai-based makeup artist with 9 years of experience in commercial and editorial beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
