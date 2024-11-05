import localFont from "next/font/local";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

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

export const metadata = {
  title: "Weather App",
  description: "A Next.js weather application with theme toggle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-grow p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
