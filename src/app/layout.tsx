import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { TransitionProvider } from "@/context/transition-context";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-360T12Y572"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-360T12Y572');
          `}
        </Script>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
