import Link from "next/link"
import { Container } from "./Container"

const socialLinks = [
  {
    label: "Behance",
    href: "https://www.behance.net/annabengaly",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anna-bengaly",
  },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-black dark:border-white mt-auto">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Anna Bengaly
          </p>

          <ul className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-lavender transition-colors"
                >
                  {link.label}
                  <span className="sr-only"> (opens in new tab)</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
