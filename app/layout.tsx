import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Astana Railway Group - B2B Agrarian Distributor",
  description:
    "Дистрибьютор свежих тепличных овощей и фруктов из Казахстана. Надежные и стабильные поставки премиальных овощей и фруктов напрямую от производителей.",
  keywords: [
    "овощи",
    "фрукты",
    "дистрибуция",
    "B2B",
    "Казахстан",
    "тепличные овощи",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} antialiased`}
        style={{
          fontFamily: "var(--font-manrope), Manrope, sans-serif",
          backgroundColor: "#F7F4EF",
          color: "#1A1A1A",
        }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
