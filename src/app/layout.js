import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import siteMetadata from "./lib/siteMetaData";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | Art Factory',
    default: siteMetadata.title
  },
  description: siteMetadata.description,
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />{children}</body>
    </html>
  );
}
