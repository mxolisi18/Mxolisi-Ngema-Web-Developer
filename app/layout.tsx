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