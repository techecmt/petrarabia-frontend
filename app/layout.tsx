import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import RFQFloating from "./components/RFQFloating";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petra Arabia - Your Critical Parts. On Time. Every Time.",
  description:
    "Specialized Filters, Fluid Power Systems, and Industrial Components. Filtration Solutions, Hydraulic/Pneumatic Systems, Safety & Instrumentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <RFQFloating />
      </body>
    </html>
  );
}
