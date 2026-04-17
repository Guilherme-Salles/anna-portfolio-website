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
    <>
      {/* Header */}
      <section
        aria-labelledby="portfolio-heading"
        className="border-b-2 border-black py-16 md:py-20 relative"
      >
        <Container>
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

          {/* badge-crystal: premium/quality, floating right of the heading */}
          <FloatingBadge
            src="/images/badge-crystal.png"
            size={120}
            rotate={-8}
            floatDistance={10}
            floatDuration={3}
            className="hidden md:block absolute top-1/2 -translate-y-1/2 right-8 z-10 pointer-events-none"
          />
        </Container>
      </section>

      {/* Project grid */}
      <section aria-label="Projects" className="py-16 md:py-24">
        <Container>
          <ProjectGrid projects={projects as Project[]} />
        </Container>
      </section>
    </>
  )
}
