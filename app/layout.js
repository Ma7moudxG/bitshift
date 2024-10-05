import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitshift",
  description: "Do it better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`'bg-white w-full mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + ${inter.className} `} >
        <header className="bg-white">
          <Navbar />
        </header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
