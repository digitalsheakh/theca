// src/app/layout.tsx
'use client';

import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StoreProvider from '@/providers/StoreProvider'
import NextAuthSessionProvider from "../providers/NextAuthSessionProvider"
import { usePathname } from 'next/navigation'
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Car Edition Pro</title>
        <meta name="description" content="The Car Edition Pro is your trusted partner for professional automotive services. We deliver quality maintenance, repairs, and diagnostics with expert care and attention to detail." />
        <meta name="keywords" content="car repair, automotive services, engine rebuilds, timing chains, turbos, brakes and pads, diagnostics, maintenance" />
        <meta name="author" content="The Car Edition Pro" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <NextAuthSessionProvider>
        <StoreProvider>
          <body
            className="font-poppins antialiased min-h-screen flex flex-col overflow-x-hidden"
            suppressHydrationWarning={true}
          >
            <Toaster />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </body>
        </StoreProvider>
      </NextAuthSessionProvider>
    </html>
  );
}
