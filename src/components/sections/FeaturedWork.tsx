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

interface FeaturedWorkProps {
  projects: Project[]
}

export function FeaturedWork({ projects }: FeaturedWorkProps) {
  const featured = projects.slice(0, 3)

  return (
    <section aria-labelledby="featured-heading" className="py-16 md:py-24 border-b-2 border-black dark:border-white">
      <Container>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2 text-lavender">
              Selected Work
            </p>
            <h2
              id="featured-heading"
              className="font-black leading-none"
              style={{ fontSize: "var(--text-heading)" }}
            >
              Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden sm:inline-flex items-center text-sm font-bold border-b-2 border-black dark:border-white pb-0.5 hover:text-lavender hover:border-lavender transition-colors"
          >
            All projects →
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-bold border-b-2 border-black dark:border-white pb-0.5"
          >
            All projects →
          </Link>
        </div>
      </Container>
    </section>
  )
}
