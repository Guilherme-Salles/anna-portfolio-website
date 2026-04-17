import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"

const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/annabengaly" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anna-bengaly" },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-black mt-auto">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <span className="font-bold text-sm uppercase tracking-[0.15em]">
            Anna Bengaly
          </span>

          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-end relative">
            {/* badge-star: centered on footer border line, just left of Behance, tilted right */}
            <div
              className="hidden sm:block absolute -top-14 z-10 pointer-events-none"
              style={{
                right: "calc(100% + 0.75rem)",
                transform: "rotate(18deg)",
              }}
            >
              <Image src="/images/badge-star.png" alt="" width={64} height={64} aria-hidden />
            </div>

            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-[0.15em] hover:text-lavender transition-colors"
              >
                {link.label}
                <span className="sr-only"> (opens in new tab)</span>
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
