import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Не вовремя",
  description: 'Музыкальная кавер-группа "Не вовремя"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={``}>{children}</body>
    </html>
  );
}
