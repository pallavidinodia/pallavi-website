import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pallavi Dinodia Gupta | Chartered Accountant India",
    template: "%s | Pallavi Dinodia Gupta",
  },
  description:
    "Pallavi Dinodia Gupta is a Chartered Accountant and Advocate specializing in transfer pricing, international taxation, and corporate advisory in India.",

  keywords: [
    "Pallavi Dinodia Gupta",
    "Pallavi Dinodia",
    "Chartered Accountant India",
    "Transfer Pricing India",
    "Tax Advisor India",
  ],

  applicationName: "Pallavi Dinodia Gupta",

  openGraph: {
    title: "Pallavi Dinodia Gupta",
    description:
      "Chartered Accountant and Tax Advisor specializing in transfer pricing and international taxation.",
    url: "https://www.pallavidinodia.com",
    siteName: "Pallavi Dinodia Gupta",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}