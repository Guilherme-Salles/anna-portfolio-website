"use client"

import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/annabengaly" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anna-bengaly" },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t-2 border-black mt-auto">
      <Container>
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          {/* badge-star: centered above footer row */}
          <div
            className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
            style={{ transform: "translateX(-50%) rotate(18deg)" }}
          >
            <Image src="/images/badge-star.svg" alt="" width={64} height={64} aria-hidden />
          </div>

          <span className="font-bold text-sm uppercase tracking-[0.15em]">
            {t.footer.label}
          </span>

          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-end relative">

            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-[0.15em] hover:text-lavender transition-colors"
              >
                {link.label}
                <span className="sr-only"> {t.footer.newTab}</span>
              </Link>
            ))}
            <span className="text-xs font-medium opacity-50">
              © {new Date().getFullYear()} Anna Bengaly
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
