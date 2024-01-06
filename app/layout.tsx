import Navbar from "@/components/navbar";
import Shell from "@/components/shell";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Providers from "@/providers";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import SideNav from "@/components/sidenav";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
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
      <body
        className={cn(
          "min-h-screen font-sans antialiased animate-background ",
          fontSans.variable
        )}
      >
        <Providers>
          <Navbar />
          <Shell className="flex">
            <ScrollArea className="max-h-screen w-[300px] rounded-md p-4">
              <SideNav />
            </ScrollArea>
            <ScrollArea className="max-h-screen rounded-md p-4">
              {children}
            </ScrollArea>
          </Shell>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
