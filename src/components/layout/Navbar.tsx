"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Container } from "./Container"
import { cn } from "@/lib/utils"

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
]

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Reserve space before mount to avoid layout shift
  if (!mounted) return <div className="w-9 h-9" aria-hidden="true" />

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center w-9 h-9 border-2 border-black dark:border-white hover:bg-lavender dark:hover:bg-lavender transition-colors"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="border-b-2 border-black dark:border-white bg-bone dark:bg-true-dark sticky top-0 z-40">
      <Container>
        <nav
          className="flex items-center justify-between py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg tracking-tight leading-none"
            onClick={() => setOpen(false)}
          >
            AB<span className="text-lavender">.</span>
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
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-black dark:bg-white" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right: theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="mailto:anna@example.com"
              className="inline-flex items-center px-4 py-2 bg-lavender text-black font-bold text-sm border-2 border-black shadow-brutal-sm hover:shadow-brutal transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile right: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span
                className={cn(
                  "block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-200",
                  open && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-black dark:bg-white transition-opacity duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-200",
                  open && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden border-t-2 border-black dark:border-white overflow-hidden transition-all duration-200",
          open ? "max-h-64" : "max-h-0"
        )}
        aria-hidden={!open}
      >
        <Container>
          <ul className="flex flex-col py-4 gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block text-lg font-medium py-1",
                    pathname === link.href ? "font-bold" : "hover:text-lavender"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="mailto:anna@example.com"
                className="inline-flex items-center px-4 py-2 bg-lavender text-black font-bold text-sm border-2 border-black shadow-brutal-sm"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  )
}
