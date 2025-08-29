import type { Metadata } from "next";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import { Inter_Tight, Montserrat } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhotonFrame Portfolio",
  description: "Showcase a photographer's work with a futuristic design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${montserrat.variable} antialiased bg-gradient-to-r from-[#0a0a0f] to-[#0a0a0f]`}
      >
        <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "highlight" }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}