import type { Metadata } from "next"
import { Container } from "@/components/layout/Container"
import { ProjectGrid } from "@/components/sections/ProjectGrid"
import { FloatingBadge } from "@/components/ui/FloatingBadge"
import { PortfolioHeading } from "@/components/sections/PortfolioHeading"
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
          <PortfolioHeading />
          <div className="flex items-center gap-6">
            <FloatingBadge
              src="/images/badge-layout.png"
              size={72}
              rotate={-8}
              floatDistance={9}
              floatDuration={4}
              className="pointer-events-none hidden sm:block"
            />
            <FloatingBadge
              src="/images/badge-crystal.svg"
              size={110}
              rotate={15}
              floatDistance={10}
              floatDuration={3}
              className="pointer-events-none"
            />
          </div>
        </div>

        <ProjectGrid projects={projects as Project[]} />
      </Container>
    </section>
  )
}
