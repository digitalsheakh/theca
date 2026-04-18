// src/app/layout.tsx

import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StoreProvider from '@/providers/StoreProvider'
import NextAuthSessionProvider from "../providers/NextAuthSessionProvider"
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "The Car Edition Pro",
  description: "The Car Edition Pro is your trusted partner for professional automotive services. We deliver quality maintenance, repairs, and diagnostics with expert care and attention to detail.",
  icons: {
    icon: "/icon.jpeg"
  },
  authors: [
    {
      name: "The Car Edition Pro",
      url: "https://thecaredition.co.uk"
    }
  ],
  keywords: [
    "car repair, automotive services, engine rebuilds, timing chains, turbos, brakes and pads, diagnostics, maintenance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
