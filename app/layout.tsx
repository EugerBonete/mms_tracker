import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title, // a default is required when creating a template
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.title,
    images: [siteConfig.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    images: [siteConfig.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex gap-x-2 min-h-screen p-2", inter.className)}>
        <Providers>
          <Sidebar />
          <main className="bg-secondary rounded-lg w-full">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
