import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import StarsCanvas from "@/components/ui/StarsBg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devotion",
  description: "A Simple Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StarsCanvas />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
