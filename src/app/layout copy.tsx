import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pet Journey',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
