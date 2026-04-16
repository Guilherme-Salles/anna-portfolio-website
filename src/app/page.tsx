import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { FeaturedWork } from "@/components/sections/FeaturedWork"
import { ContactBanner } from "@/components/sections/ContactBanner"
import projects from "@/data/projects.json"
import type { Project } from "@/types"

export const metadata: Metadata = {
  title: "Anna Bengaly — UX/UI Designer",
  description:
    "Portfolio of Anna Bengaly, UX/UI Product Designer based in Rio de Janeiro. Specializing in user experience, interface design, and product strategy.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork projects={projects as Project[]} />
      <ContactBanner />
    </>
  )
}
