import type { Metadata } from "next"
import { Container } from "@/components/layout/Container"
import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { FloatingBadge } from "@/components/ui/FloatingBadge"
import projects from "@/data/projects.json"
import type { Project } from "@/types"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Anna Bengaly's UX/UI design projects — from fitness apps to telemedicine interfaces and e-commerce experiences.",
}

export default function PortfolioPage() {
  return (
    <section aria-labelledby="portfolio-heading" className="py-16 md:py-24">
      <Container>
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-lavender">
              Portfolio
            </p>
            <h1
              id="portfolio-heading"
              className="font-black leading-none"
              style={{ fontSize: "var(--text-heading)" }}
            >
              All Work.
            </h1>
          </div>
          <FloatingBadge
            src="/images/badge-crystal.png"
            size={110}
            rotate={15}
            floatDistance={10}
            floatDuration={3}
            className="pointer-events-none"
          />
        </div>

        <ProjectGrid projects={projects as Project[]} />
      </Container>
    </section>
  )
}
