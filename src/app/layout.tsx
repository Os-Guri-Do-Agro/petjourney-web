import "./globals.css";
import type { Metadata } from "next";
import { TransitionProvider } from "@/context/transition-context";

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
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}

