"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { ProjectCard } from "@/components/ui/ProjectCard"
import type { Project } from "@/types"

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

// Cycles through design system accent colours
const accentColors = ["mint", "lavender", "pink"] as const

interface FeaturedWorkProps {
  projects: Project[]
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.857 1.8 2.01 1.8.7 0 1.28-.233 1.743-.699h2.003zm-4.76-4.556c-.12-1.04-.67-1.84-1.78-1.84-1.09 0-1.75.74-1.87 1.84h3.65zM6 4.5h4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H6V4.5zm0 4.5h5c.83 0 1.5.67 1.5 1.5S11.83 12 11 12H6V9zm0 4.5h5.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H6v-3z"/>
    </svg>
  )
}

function ExternalArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7,7 17,7 17,17" />
    </svg>
  )
}

export function FeaturedWork({ projects }: FeaturedWorkProps) {
  const featured = projects.slice(0, 3)

  return (
    <section aria-labelledby="featured-heading" className="py-16 md:py-24 border-b-2 border-black dark:border-white">
      <Container>

        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-8 mb-12">
          <h2
            id="featured-heading"
            className="font-black leading-none uppercase"
            style={{ fontSize: "var(--text-hero)" }}
          >
            Selected
            <br />
            Works
          </h2>

          <p className="hidden sm:block text-xs font-bold tracking-[0.15em] uppercase leading-relaxed max-w-[200px] text-right opacity-50 mt-2">
            [{String(featured.length).padStart(2, "0")}] Projects featuring intentional design &amp; technical precision
          </p>
        </div>

        {/* ── Project grid ───────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {featured.map((project, i) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                project={project}
                index={i}
                accentColor={accentColors[i % accentColors.length]}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── See all projects button ─────────────────────────────────── */}
        <div className="mt-10 flex justify-center">
          <Link
            href="https://www.behance.net/annabengaly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 border-2 border-black dark:border-white font-bold text-sm shadow-brutal-sm dark:shadow-brutal-sm-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal dark:hover:shadow-brutal-white transition-all duration-150"
          >
            see all projects
            <BehanceIcon />
            <ExternalArrow />
            <span className="sr-only">(opens Behance in new tab)</span>
          </Link>
        </div>

      </Container>
    </section>
  )
}
