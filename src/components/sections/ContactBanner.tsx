"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Container } from "@/components/layout/Container"

export function ContactBanner() {
  return (
    <motion.section
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 bg-mint border-b-2 border-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2">
              Available for work
            </p>
            <h2
              id="contact-heading"
              className="font-black leading-none text-black"
              style={{ fontSize: "var(--text-heading)" }}
            >
              Let&apos;s build
              <br />
              something great.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="mailto:anna@example.com"
              className="inline-flex items-center px-6 py-3 bg-black text-bone font-bold text-sm border-2 border-black shadow-brutal-sm hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal transition-all duration-150"
            >
              Send an email
            </Link>
            <Link
              href="https://www.linkedin.com/in/anna-bengaly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent text-black font-bold text-sm border-2 border-black shadow-brutal-sm hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal transition-all duration-150"
            >
              LinkedIn
              <span className="sr-only"> (opens in new tab)</span>
            </Link>
          </div>
        </div>
      </Container>
    </motion.section>
  )
}
