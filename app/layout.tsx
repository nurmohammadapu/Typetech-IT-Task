import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google"; 
import "./globals.css";
import { Toaster } from "react-hot-toast";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Real Estate Agency",
  description: "Real Estate Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${nunitoSans.className} font-poppins`}>
      <Toaster position="top-center" />
        {children}
        </body>
    </html>
  );
}
