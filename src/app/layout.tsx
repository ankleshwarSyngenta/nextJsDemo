import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ankleshwar Dwivedi - Senior Software Engineer | Mobile App Development Expert",
  description: "Senior Software Engineer with 10+ years in mobile development. React Native, iOS, Flutter expert at EPAM Systems specializing in enterprise applications.",
  openGraph: {
    title: "Ankleshwar Dwivedi - Senior Software Engineer",
    description: "10+ years mobile development experience. React Native, iOS, Flutter expert at EPAM Systems.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-deep-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-deep-black text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
