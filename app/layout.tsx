import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Website",
  description: "A beautiful and dynamic blog platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <div className="min-h-screen bg-gradient-to-b from-background to-muted">
            <Navbar />
            <main>{children}</main>
          </div>
          <Toaster />
          <Footer />
      </body>
    </html>
  );
}
