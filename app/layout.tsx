import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteContent } from "./content/siteContent";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  metadataBase: new URL(siteContent.meta.canonicalUrl),
  alternates: {
    canonical: siteContent.meta.canonicalUrl,
  },
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: siteContent.meta.canonicalUrl,
    siteName: siteContent.navigation.brandName,
    images: [
      {
        url: siteContent.meta.ogImage,
        width: 1200,
        height: 630,
        alt: siteContent.meta.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Upthrust",
    url: siteContent.meta.canonicalUrl,
    logo: `${siteContent.meta.canonicalUrl}/pic3.png`,
    description: siteContent.meta.description,
    sameAs: [
      "https://instagram.com",
      "https://linkedin.com",
    ],
  };

  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-[#FF3800] selection:text-white">
        {children}
      </body>
    </html>
  );
}
