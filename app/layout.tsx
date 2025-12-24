import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const sadanaSquare = localFont({
  src: "../public/fonts/SadanaSquare.ttf",
  variable: "--font-sadana-square",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KANSATIATE | Authentic Premium Vegetarian",
  description: "Premium Vegetarian Food Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sadanaSquare.variable} ${outfit.variable} antialiased font-sans bg-background text-foreground`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
