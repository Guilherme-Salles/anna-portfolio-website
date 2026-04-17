import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/layout/Container"
import { ContactBanner } from "@/components/sections/ContactBanner"
import { FloatingBadge } from "@/components/ui/FloatingBadge"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Anna Bengaly — UX/UI Product Designer with a passion for research-driven, user-centred design.",
}

const skills = [
  {
    category: "Design",
    items: ["User Research", "Usability Testing", "User Flows", "Design Systems", "Accessibility (WCAG)", "Prototyping"],
  },
  {
    category: "Tools",
    items: ["Figma", "Maze", "Miro", "Adobe XD", "Adobe Photoshop", "Figma Make"],
  },
  {
    category: "Soft Skills",
    items: ["Strategic Thinking", "Stakeholder Communication", "Workshop Facilitation", "Cross-functional Collaboration"],
  },
]

const accentColors = ["mint", "lavender", "pink"] as const
const accentBorder: Record<string, string> = {
  mint:     "var(--color-mint)",
  lavender: "var(--color-lavender)",
  pink:     "var(--color-pink)",
}

const experience = [
  {
    role: "Senior UX Designer",
    company: "Usiminas · via Stefanini Group",
    period: "Nov 2024",
    current: true,
    bullets: [
      "Embedded at Usiminas, one of Brazil's largest steel companies, through Stefanini Group as consulting UX lead.",
      "Led user and stakeholder research to identify critical needs in corporate digital solutions.",
      "Planned and executed usability tests that improved interface intuitiveness and reduced development rework.",
      "Served as UX reference within product squads, ensuring alignment between user experience and business goals.",
    ],
  },
  {
    role: "UX Designer",
    company: "Aquarela Analytics",
    period: "Mar 2023 – Nov 2024",
    current: false,
    bullets: [
      "Designed innovative solutions for AI and Analytics projects, leading discovery, user interviews, and journey mapping.",
      "Applied UX research methods to create intuitive data dashboards, improving user adoption.",
      "Facilitated usability tests and collaborated closely with product and engineering teams.",
    ],
  },
  {
    role: "UX/UI Designer",
    company: "Mouts TI",
    period: "Jan 2022 – Feb 2023",
    current: false,
    bullets: [
      "Mapped user journeys, gathered requirements, and designed wireframes for B2B and B2C applications.",
      "Delivered UX/UI solutions that enhanced navigation and engagement across web and mobile products.",
    ],
  },
  {
    role: "Product Designer",
    company: "Octopus IC",
    period: "Jul 2021 – Feb 2023",
    current: false,
    bullets: [
      "End-to-end design for administrative and financial management platforms.",
      "Conducted research, prototyping, and iterative collaboration with stakeholders to align with operational workflows.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Nuvem Tecnologia",
    period: "Feb 2021 – Jan 2022",
    current: false,
    bullets: [
      "Full UX/UI design lifecycle for desktop and mobile applications.",
      "Improved visual and interactive quality of digital products through Adobe XD prototypes.",
    ],
  },
  {
    role: "UX Designer",
    company: "Itzol.digital",
    period: "Dec 2019 – Feb 2021",
    current: false,
    bullets: [
      "Executed user research, journey mapping, and usability testing for web projects.",
      "Designed interfaces in Figma with a focus on usability and accessibility.",
    ],
  },
  {
    role: "UX Designer",
    company: "BlueBird & Co",
    period: "Jan 2019 – Nov 2019",
    current: false,
    bullets: [
      "Created interfaces for corporate websites and event hotsites.",
      "Developed interactive prototypes and supported research-driven design.",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero — two column on desktop */}
      <section
        aria-labelledby="about-heading"
        className="border-b-2 border-black py-16 md:py-24"
      >
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

            {/* Left: bio text */}
            <div className="relative">
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
                  Janeiro, Brazil, designing since 2019. Currently working as
                  Senior UX Designer at Stefanini Group, I create digital products
                  that put users first — combining research, strategy, and interface
                  design to build scalable experiences.
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

            {/* Right: portrait image + badges (desktop only) */}
            <div className="hidden lg:block relative flex-shrink-0 self-center">
              <div
                className="relative w-[240px] h-[320px] border-2 border-black shadow-brutal"
                style={{ transform: "rotate(2deg)" }}
              >
                <Image
                  src="/images/about-profile-placeholder.png"
                  alt="Anna Bengaly"
                  fill
                  className="object-cover object-top"
                  sizes="240px"
                />
              </div>

              {/* badge-photo */}
              <div
                className="absolute -top-6 -left-6 z-20 pointer-events-none"
                style={{ transform: "rotate(-8deg)" }}
              >
                <Image src="/images/badge-photo.png" alt="" width={72} height={72} aria-hidden />
              </div>

              {/* badge-smile */}
              <FloatingBadge
                src="/images/badge-smile.svg"
                size={100}
                rotate={12}
                floatDistance={8}
                floatDuration={4}
                className="absolute -bottom-10 -right-8 z-10 pointer-events-none"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* Skills */}
      <section
        aria-labelledby="skills-heading"
        className="py-16 md:py-24 border-b-2 border-black"
      >
        <Container>
          <div className="relative">
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

            {/* badge-piechart: top-right */}
            <div
              className="hidden sm:block absolute top-0 right-0 z-10 pointer-events-none"
              style={{ transform: "rotate(7deg)" }}
            >
              <Image src="/images/badge-piechart.png" alt="" width={68} height={68} aria-hidden />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
              {/* badge-apps: above and left of the grid, clear of the DESIGN header */}
              <FloatingBadge
                src="/images/badge-apps.png"
                size={68}
                rotate={-8}
                floatDistance={8}
                floatDuration={4.2}
                className="hidden sm:block absolute -top-16 -left-8 z-10 pointer-events-none"
              />

              {skills.map((group, i) => (
                <div
                  key={group.category}
                  className={`p-6 md:p-8 ${i < skills.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-black" : ""}`}
                >
                  <h3 className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-lavender">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section
        aria-labelledby="experience-heading"
        className="py-16 md:py-24 border-b-2 border-black relative"
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

          <div className="max-w-2xl relative">
            {/* badge-planet: right next to the top of the cards */}
            <FloatingBadge
              src="/images/badge-planet.svg"
              size={96}
              rotate={-8}
              floatDistance={12}
              floatDuration={3.5}
              className="hidden lg:block absolute top-0 -right-28 z-10 pointer-events-none"
            />

            {/* badge-filters: right next to the bottom of the cards */}
            <FloatingBadge
              src="/images/badge-filters.png"
              size={80}
              rotate={8}
              floatDistance={11}
              floatDuration={3.6}
              className="hidden lg:block absolute bottom-8 -right-24 z-10 pointer-events-none"
            />

          <div className="space-y-4">
            {experience.map((job, i) => (
              <div key={`${job.company}-${i}`} className="border-2 border-black shadow-brutal-sm relative">

                {/* badge-check: overlapping top-right of first card */}
                {i === 0 && (
                  <FloatingBadge
                    src="/images/badge-check.png"
                    size={72}
                    rotate={10}
                    floatDistance={9}
                    floatDuration={3.2}
                    className="hidden lg:block absolute -top-7 -right-6 z-10 pointer-events-none"
                  />
                )}

                {/* badge-folder: overlapping bottom-left of card 4 */}
                {i === 3 && (
                  <FloatingBadge
                    src="/images/badge-folder.png"
                    size={72}
                    rotate={-12}
                    floatDistance={10}
                    floatDuration={4.5}
                    className="hidden lg:block absolute -bottom-7 -left-6 z-10 pointer-events-none"
                  />
                )}

                <div
                  className="border-[3px] border-solid"
                  style={{ borderColor: accentBorder[accentColors[i % accentColors.length]] }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <h3 className="font-bold text-base">{job.role}</h3>
                      <span className="text-xs font-bold text-lavender flex-shrink-0">
                        {job.current ? "Current" : job.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium mb-3">{job.company}</p>
                    <ul className="space-y-1.5">
                      {job.bullets.map((bullet, j) => (
                        <li key={j} className="text-sm leading-relaxed opacity-75 flex gap-2">
                          <span className="w-1.5 h-1.5 bg-black flex-shrink-0 mt-[0.4em]" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>

        </Container>
      </section>

      <ContactBanner />
    </>
  )
}
