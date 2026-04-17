"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/layout/Container"
import { useLanguage } from "@/lib/language-context"

export function ContactBanner() {
  const [email, setEmail] = useState("")
  const { t } = useLanguage()

  const headingLines = t.contact.heading.split("\n")

  return (
    <section aria-labelledby="contact-heading" className="bg-bone py-16 md:py-20 pb-28 md:pb-32">
      <Container>
        <motion.div
          className="relative bg-lavender border-2 border-black shadow-brutal-lg px-10 md:px-14 py-12 md:py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* ── Left content ─────────────────────────────────────────── */}
          <div className="max-w-2xl">
            <h2
              id="contact-heading"
              className="font-black uppercase leading-none text-black text-5xl md:text-6xl lg:text-7xl mb-5"
            >
              {headingLines[0]}
              <br />
              {headingLines[1]}
            </h2>

            <p className="text-sm font-medium text-black/60 max-w-md mb-8 leading-relaxed">
              {t.contact.description}
            </p>

            {/* ── Email form ───────────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.placeholder}
                aria-label={t.contact.inputLabel}
                className="flex-1 px-5 py-4 bg-white border-2 border-black text-xs font-bold tracking-[0.15em] uppercase placeholder:text-black/30 outline-none focus:bg-bone transition-colors"
              />
              <a
                href={`mailto:bengalyannaluisa@gmail.com${email ? `?subject=Let%27s%20work%20together&body=My%20email%20is%20${encodeURIComponent(email)}` : ""}`}
                className="px-10 py-4 bg-black text-white font-bold text-xs tracking-[0.15em] uppercase border-2 border-black sm:border-l-0 border-t-0 sm:border-t-2 hover:bg-lavender hover:text-black transition-colors duration-150 text-center shrink-0"
              >
                {t.contact.send}
              </a>
            </div>
          </div>

          {/* badge-rocket: top-right */}
          <div className="absolute -top-12 right-10 md:right-14 z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/badge-rocket.png"
                alt=""
                width={148}
                height={148}
                aria-hidden="true"
              />
            </motion.div>
          </div>

        </motion.div>
      </Container>
    </section>
  )
}
