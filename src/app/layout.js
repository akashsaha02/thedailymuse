import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "./AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Daily Muse",
  description: "All In One Blogging Website",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>

      <html lang="en" data-theme='light'>
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}

          className="bg-gray-100 text-black"
        >
          <Navbar />
          <main className="min-h-screen max-w-7xl mx-auto px-4">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
