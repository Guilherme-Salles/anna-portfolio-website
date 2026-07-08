"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container } from "./Container"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

function LangToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="inline-flex border-2 border-black shadow-brutal-sm overflow-hidden"
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "px-2.5 py-2 text-[10px] font-black tracking-[0.12em] transition-colors duration-150 leading-none",
          lang === "en" ? "bg-mint text-black" : "bg-bone text-black hover:bg-black/10"
        )}
      >
        EN
      </button>
      <div className="w-0.5 bg-black self-stretch" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={cn(
          "px-2.5 py-2 text-[10px] font-black tracking-[0.12em] transition-colors duration-150 leading-none",
          lang === "pt" ? "bg-pink text-black" : "bg-bone text-black hover:bg-black/10"
        )}
      >
        PT
      </button>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.portfolio, href: "/portfolio" },
  ]

  return (
    <header className="border-b-2 border-black bg-bone sticky top-0 z-40">
      <Container>
        <nav
          className="flex items-center justify-between py-3"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label={t.nav.ariaHome}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/anna-topbar.png"
              alt="Anna"
              style={{ height: "36px", width: "auto", display: "block" }}
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative py-1 transition-colors",
                    pathname === link.href
                      ? "font-bold"
                      : "hover:text-lavender"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-black" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right: CTA + lang toggle */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={`mailto:bengalyannaluisa@gmail.com`}
              className="inline-flex items-center px-4 py-2 bg-lavender text-black font-bold text-sm border-2 border-black shadow-brutal-sm hover:shadow-brutal transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              {t.nav.cta}
            </Link>
            <LangToggle />
          </div>

          {/* Mobile right: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(!open)}
              aria-label={t.nav.ariaToggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className={cn("block w-6 h-0.5 bg-black transition-transform duration-200", open && "translate-y-2 rotate-45")} />
              <span className={cn("block w-6 h-0.5 bg-black transition-opacity duration-200", open && "opacity-0")} />
              <span className={cn("block w-6 h-0.5 bg-black transition-transform duration-200", open && "-translate-y-2 -rotate-45")} />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn("md:hidden border-t-2 border-black overflow-hidden transition-all duration-200", open ? "max-h-64" : "max-h-0")}
        aria-hidden={!open}
      >
        <Container>
          <ul className="flex flex-col py-4 gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn("block text-lg font-medium py-1", pathname === link.href ? "font-bold" : "hover:text-lavender")}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="mailto:bengalyannaluisa@gmail.com"
                className="inline-flex items-center px-4 py-2 bg-lavender text-black font-bold text-sm border-2 border-black shadow-brutal-sm"
                onClick={() => setOpen(false)}
              >
                {t.nav.cta}
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  )
}
