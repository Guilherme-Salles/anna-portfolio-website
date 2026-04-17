"use client"

import { motion, type Variants } from "framer-motion"
import { ProjectCard } from "@/components/ui/ProjectCard"
import type { Project } from "@/types"

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const accentColors = ["mint", "lavender", "pink"] as const

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <motion.div key={project.id} variants={itemVariants} className="h-full">
          <ProjectCard
            project={project}
            index={index}
            accentColor={accentColors[index % accentColors.length]}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
