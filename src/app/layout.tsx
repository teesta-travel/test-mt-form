import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teesta Health Care",
  description: "Bringing health to life for the whole family 🏥",
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
