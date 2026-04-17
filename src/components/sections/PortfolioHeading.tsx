"use client"

import { useLanguage } from "@/lib/language-context"

export function PortfolioHeading() {
  const { t } = useLanguage()
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-lavender">
        {t.portfolio.label}
      </p>
      <h1
        id="portfolio-heading"
        className="font-black leading-none"
        style={{ fontSize: "var(--text-heading)" }}
      >
        {t.portfolio.heading}
      </h1>
    </div>
  )
}
