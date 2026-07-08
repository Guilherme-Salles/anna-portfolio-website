"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getBlurDataURL } from "@/lib/image-utils"
import type { Project } from "@/types"
import { useLanguage } from "@/lib/language-context"

interface ProjectCardProps {
  project: Project
  index?: number
  accentColor?: "lavender" | "mint" | "pink"
}

const accentColorVar: Record<string, string> = {
  lavender: "var(--color-lavender)",
  mint:     "var(--color-mint)",
  pink:     "var(--color-pink)",
}

const tagColorVar: Record<string, string> = {
  "UX Design":   "var(--color-lavender)",
  "UI Design":   "var(--color-mint)",
  "Research":    "var(--color-pink)",
  "Case Study":  "var(--color-lavender)",
  "Interface":   "var(--color-pink)",
  "App Design":  "var(--color-pink)",
  "Mobile App":  "var(--color-lavender)",
  "Telemedicine":"var(--color-mint)",
  "Ecommerce":   "var(--color-lavender)",
  "Fitness":     "var(--color-mint)",
}

function CardContent({ project, index }: { project: Project; index?: number }) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col flex-1">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-black">
        <Image
          src={project.cover_url}
          alt={`${project.title} — ${t.projectCard.coverAlt}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={getBlurDataURL()}
        />
        {project.featured && (
          <span className="absolute top-3 left-3 bg-lavender text-black text-xs font-bold px-2 py-1 border-2 border-black">
            {t.projectCard.featured}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
          {index !== undefined && (
            <span className="text-xs font-bold opacity-40 flex-shrink-0 mt-1">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        {t.projectDescriptions[project.slug as keyof typeof t.projectDescriptions] && (
          <p className="text-sm leading-relaxed mb-3">
            {t.projectDescriptions[project.slug as keyof typeof t.projectDescriptions]}
          </p>
        )}

        {/* Tags + link anchored to bottom */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => {
              const bg = tagColorVar[tag]
              return (
                <span
                  key={tag}
                  className="text-xs font-bold px-2 py-0.5 border border-black"
                  style={bg ? { backgroundColor: bg, color: "#000" } : undefined}
                >
                  {tag}
                </span>
              )
            })}
          </div>
          <Link
            href={project.behance_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold border-b-2 border-black pb-0.5 hover:text-lavender hover:border-lavender transition-colors"
          >
            {t.projectCard.viewOnBehance}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7,7 17,7 17,17" />
            </svg>
            <span className="sr-only">{t.projectCard.newTab}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({ project, index, accentColor }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{
        x: -4,
        y: -4,
        transition: { duration: 0.15, ease: "easeOut" },
      }}
      className={cn(
        "border-2 border-black bg-bone group h-full flex flex-col",
        "shadow-brutal-sm hover:shadow-brutal transition-shadow duration-150"
      )}
    >
      {accentColor ? (
        <div
          className="border-[3px] border-solid flex flex-col flex-1"
          style={{ borderColor: accentColorVar[accentColor] }}
        >
          <CardContent project={project} index={index} />
        </div>
      ) : (
        <CardContent project={project} index={index} />
      )}
    </motion.article>
  )
}
