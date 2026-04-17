import type { Metadata } from "next"
import { AboutContent } from "@/components/sections/AboutContent"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Anna Bengaly — UX/UI Product Designer with a passion for research-driven, user-centred design.",
}

export default function AboutPage() {
  return <AboutContent />
}
