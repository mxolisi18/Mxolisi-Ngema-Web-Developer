import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mxolisi Ngema – Web Developer",
  description: "Portfolio website of Mxolisi Ngema showcasing web projects, skills, and contact information.",
    generator: 'v0.dev'
}

export const metadataBase = new URL("https://mxolisi-ngema-web-developer.vercel.app")

// additional SEO metadata
export const seo: Metadata = {
  keywords: ["Mxolisi Mazwi Ngema", "Mxolisi", "web developer", "portfolio"],
  authors: [{ name: "Mxolisi Mazwi Ngema" }],
  openGraph: {
    title: "Mxolisi Mazwi Ngema – Web Developer",
    description:
      "Portfolio website of Mxolisi Mazwi Ngema showcasing web projects, skills, and contact information.",
    url: metadataBase.toString(),
    siteName: "Mxolisi Mazwi Ngema – Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      { url: new URL("/og.svg", metadataBase).toString(), alt: "Mxolisi Mazwi Ngema — Web Developer" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mxolisi Mazwi Ngema – Web Developer",
    description:
      "Portfolio website of Mxolisi Mazwi Ngema showcasing web projects, skills, and contact information.",
    images: [new URL("/og.svg", metadataBase).toString()],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={metadataBase.toString()} />
        <link rel="sitemap" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mxolisi Mazwi Ngema",
              url: metadataBase.toString(),
              sameAs: [
                metadataBase.toString(),
                "https://github.com/mxolisi18",
                "https://www.linkedin.com/in/mxolisi-ngema",
              ],
            }),
          }}
        />
        {/* Google Analytics (GA4) - load only in production and when NEXT_PUBLIC_GA_ID is set */}
        {process.env.NEXT_PUBLIC_GA_ID && (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production') ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        ) : null}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'