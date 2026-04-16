import type { Metadata } from "next"
import { Container } from "@/components/layout/Container"
import { ContactBanner } from "@/components/sections/ContactBanner"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Anna Bengaly — UX/UI Product Designer with a passion for research-driven, user-centred design.",
}

const skills = [
  { category: "Design", items: ["UX Research", "UI Design", "Prototyping", "Design Systems", "User Testing", "Wireframing"] },
  { category: "Tools", items: ["Figma", "Maze", "Miro", "Adobe Photoshop", "Google Forms", "Figma Make"] },
  { category: "Soft Skills", items: ["Strategic Thinking", "Stakeholder Communication", "Workshop Facilitation", "Cross-functional Collaboration"] },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="about-heading"
        className="border-b-2 border-black dark:border-white py-16 md:py-24"
      >
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-lavender">
              About
            </p>
            <h1
              id="about-heading"
              className="font-black leading-none mb-8"
              style={{ fontSize: "var(--text-heading)" }}
            >
              Designing with
              <br />
              purpose.
            </h1>
            <div className="space-y-4 text-base leading-relaxed max-w-xl">
              <p>
                I&apos;m Anna Bengaly, a UX/UI Product Designer based in Rio de
                Janeiro, Brazil. Currently working at Stefanini Group, I design
                digital products that put users first — combining data, research,
                and thoughtful design to create experiences that actually work.
              </p>
              <p>
                My process is grounded in empathy and evidence. I believe the best
                interfaces are invisible — they guide users effortlessly toward
                their goals without getting in the way.
              </p>
              <p>
                I&apos;m available for remote full-time opportunities and open to
                collaborate on meaningful projects worldwide.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section
        aria-labelledby="skills-heading"
        className="py-16 md:py-24 border-b-2 border-black dark:border-white"
      >
        <Container>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2 text-lavender">
            Skills
          </p>
          <h2
            id="skills-heading"
            className="font-black leading-none mb-10"
            style={{ fontSize: "var(--text-heading)" }}
          >
            What I do.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black dark:border-white">
            {skills.map((group, i) => (
              <div
                key={group.category}
                className={`p-6 md:p-8 ${i < skills.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-white" : ""}`}
              >
                <h3 className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-lavender">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black dark:bg-white flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section
        aria-labelledby="experience-heading"
        className="py-16 md:py-24 border-b-2 border-black dark:border-white"
      >
        <Container>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2 text-lavender">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="font-black leading-none mb-10"
            style={{ fontSize: "var(--text-heading)" }}
          >
            Where I&apos;ve been.
          </h2>

          <div className="max-w-2xl space-y-0 border-2 border-black dark:border-white divide-y-2 divide-black dark:divide-white">
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <h3 className="font-bold text-base">UX/UI Designer</h3>
                <span className="text-xs font-bold text-lavender">Current</span>
              </div>
              <p className="text-sm font-medium mb-2">Stefanini Group</p>
              <p className="text-sm leading-relaxed opacity-75">
                Designing digital products and experiences for enterprise clients,
                focusing on user research, prototyping, and design systems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ContactBanner />
    </>
  )
}
