import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electric Component Sales | Manufacturers Representative",
  description:
    "Electric Component Sales (ECS) is a premier electrical and electronic manufacturers representative serving the Upper Midwest. Connecting manufacturers to markets since our founding.",
  keywords: [
    "manufacturers representative",
    "electrical manufacturers rep",
    "electronic manufacturers rep",
    "Upper Midwest",
    "electric component sales",
    "ECS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
