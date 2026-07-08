import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SkipLink } from "@/components/layout/SkipLink"
import { LanguageProvider } from "@/lib/language-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Anna Bengaly — UX/UI Designer",
    template: "%s | Anna Bengaly",
  },
  description:
    "Portfolio of Anna Bengaly, UX/UI Product Designer based in Rio de Janeiro. Specializing in user experience, interface design, and product strategy.",
  keywords: ["UX Design", "UI Design", "Product Designer", "Rio de Janeiro", "Portfolio"],
  authors: [{ name: "Anna Bengaly" }],
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Anna Bengaly",
    title: "Anna Bengaly — UX/UI Designer",
    description:
      "Portfolio of Anna Bengaly, UX/UI Product Designer based in Rio de Janeiro.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna Bengaly — UX/UI Designer",
    description:
      "Portfolio of Anna Bengaly, UX/UI Product Designer based in Rio de Janeiro.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="min-h-dvh flex flex-col antialiased">
        <LanguageProvider>
          <SkipLink />
          <Navbar />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
