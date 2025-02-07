import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto, Inter, Poppins } from "next/font/google";
import Navbar from "./components/ui/Navbar";
import TopBar from "./components/ui/TopBar";
import Footer from "./components/ui/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Comforty - Furniture E-Commerce",
  description: "Best Furniture Collection for your interior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} ${inter.className} ${poppins.className} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <div className="sticky top-0 z-50 bg-white">
            <TopBar />
            <Navbar />
          </div>
          <main className="flex-grow">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="max-w-[2000px] mx-auto">{children}</div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}