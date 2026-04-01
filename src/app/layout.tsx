import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.coventrypropertysurveys.co.uk";

const headingFont = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Property Surveys and Inspection",
    template: "%s | Property Surveys and Inspection",
  },
  description:
    "Professional residential and commercial property surveys, EPCs, floor plans, and compliance reporting with reliable turnaround.",
  keywords: [
    "property surveys",
    "home survey",
    "EPC",
    "domestic EPC",
    "commercial EPC",
    "floor plans",
    "asbestos survey",
    "fire risk assessment",
    "legionella risk assessment",
    "property inspection",
  ],
  applicationName: "Property Surveys and Inspection",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Property Surveys and Inspection",
    title: "Property Surveys and Inspection",
    description:
      "Professional residential and commercial property surveys, EPCs, floor plans, and compliance reporting.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Property Surveys and Inspection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Surveys and Inspection",
    description:
      "Professional residential and commercial property surveys, EPCs, floor plans, and compliance reporting.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Property Surveys and Inspection",
  url: siteUrl,
  image: `${siteUrl}/logo.png`,
  telephone: "+44-24-7629-1555",
  email: "info@coventrypropertysurveys.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "111 New Union Street",
    postalCode: "CV1 2NT",
    addressCountry: "GB",
  },
  areaServed: "United Kingdom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {children}
      </body>
    </html>
  );
}
