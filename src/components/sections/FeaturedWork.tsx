"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
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
    <Image
      src="/images/icons/behance.png"
      alt="Behance"
      width={20}
      height={20}
      className="dark:invert"
    />
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
            className="font-black leading-none uppercase text-5xl md:text-6xl"
          >
            Selected
            <br />
            Works
          </h2>

          <p className="hidden sm:block text-[10px] font-bold tracking-[0.12em] uppercase leading-relaxed max-w-[160px] text-right opacity-40 mt-auto pb-1">
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
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-lavender text-black border-2 border-black font-bold text-sm shadow-brutal-sm hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal transition-all duration-150"
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
