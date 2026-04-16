"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { getBlurDataURL } from "@/lib/image-utils"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{
        x: -4,
        y: -4,
        transition: { duration: 0.15, ease: "easeOut" },
      }}
      className="border-2 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-sm-white hover:shadow-brutal dark:hover:shadow-brutal-white bg-bone dark:bg-true-dark group transition-shadow duration-150"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-black dark:border-white">
        <Image
          src={project.cover_url}
          alt={`${project.title} — project cover`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={getBlurDataURL()}
        />
        {project.featured && (
          <span className="absolute top-3 left-3 bg-lavender text-black text-xs font-bold px-2 py-1 border-2 border-black">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg leading-tight mb-2">{project.title}</h3>

        {project.description && (
          <p className="text-sm leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-0.5 border border-black dark:border-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link
          href={project.behance_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-bold border-b-2 border-black dark:border-white pb-0.5 hover:text-lavender hover:border-lavender transition-colors"
        >
          View on Behance
          <span className="ml-1" aria-hidden="true">→</span>
          <span className="sr-only"> (opens in new tab)</span>
        </Link>
      </div>
    </motion.article>
  )
}
