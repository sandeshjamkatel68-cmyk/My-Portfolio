import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import PageTransition from "@/components/ui/PageTransition";
import CustomCursor from "@/components/cursor/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://sandeshjamkatel.me"),
  title: {
    default: "Sandesh Jamkatel — Developer & Builder",
    template: "%s | Sandesh Jamkatel",
  },
  description:
    "BCA student and developer from Nepal building practical web products. Focused on frontend development, product thinking, and clean user experiences.",
  keywords: [
    "Sandesh Jamkatel",
    "developer Nepal",
    "BCA student developer",
    "Next.js developer",
    "frontend developer Nepal",
    "ShrinkBox",
    "web developer portfolio",
  ],
  authors: [{ name: "Sandesh Jamkatel", url: "https://sandeshjamkatel.me" }],
  creator: "Sandesh Jamkatel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sandeshjamkatel.me",
    siteName: "Sandesh Jamkatel",
    title: "Sandesh Jamkatel — Developer & Builder",
    description: "Building practical web products with care, craft, and purpose.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandesh Jamkatel — Developer & Builder",
    description: "Building practical web products with care, craft, and purpose.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
