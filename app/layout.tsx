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
  keywords: ["Mxolisi Ngema", "Mxolisi", "web developer", "portfolio"],
  authors: [{ name: "Mxolisi Ngema" }],
  openGraph: {
    title: "Mxolisi Ngema – Web Developer",
    description:
      "Portfolio website of Mxolisi Ngema showcasing web projects, skills, and contact information.",
    url: metadataBase.toString(),
    siteName: "Mxolisi Ngema – Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mxolisi Ngema – Web Developer",
    description:
      "Portfolio website of Mxolisi Ngema showcasing web projects, skills, and contact information.",
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
              name: "Mxolisi Ngema",
              url: metadataBase.toString(),
              sameAs: [metadataBase.toString()],
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