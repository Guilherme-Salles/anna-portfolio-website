"use client"

import Image from "next/image"
import { Container } from "@/components/layout/Container"
import { ContactBanner } from "@/components/sections/ContactBanner"
import { FloatingBadge } from "@/components/ui/FloatingBadge"
import { useLanguage } from "@/lib/language-context"

const accentColors = ["mint", "lavender", "pink"] as const
const accentBorder: Record<string, string> = {
  mint:     "var(--color-mint)",
  lavender: "var(--color-lavender)",
  pink:     "var(--color-pink)",
}

export function AboutContent() {
  const { t } = useLanguage()
  const { about } = t

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
                {about.label}
              </p>
              <h1
                id="about-heading"
                className="font-black leading-none mb-8"
                style={{ fontSize: "var(--text-heading)" }}
              >
                {about.heading.split("\n")[0]}
                <br />
                {about.heading.split("\n")[1]}
              </h1>
              <div className="space-y-4 text-base leading-relaxed max-w-xl">
                {about.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <a
                href="/cv-en-anna-bengaly.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-mint text-black font-bold text-xs tracking-[0.15em] uppercase border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150"
              >
                {about.resumeBtn}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </a>
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
              {about.skillsLabel}
            </p>
            <h2
              id="skills-heading"
              className="font-black leading-none mb-10"
              style={{ fontSize: "var(--text-heading)" }}
            >
              {about.skillsHeading}
            </h2>

            {/* badge-piechart: top-right */}
            <div
              className="hidden sm:block absolute top-0 right-0 z-10 pointer-events-none"
              style={{ transform: "rotate(7deg)" }}
            >
              <Image src="/images/badge-piechart.png" alt="" width={68} height={68} aria-hidden />
            </div>

            {/* badge-apps: below heading, left of the grid */}
            <FloatingBadge
              src="/images/badge-apps.png"
              size={68}
              rotate={-8}
              floatDistance={8}
              floatDuration={4.2}
              className="hidden sm:block absolute top-20 -left-14 z-10 pointer-events-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {about.skills.map((group, i) => (
                <div key={group.category} className="border-2 border-black shadow-brutal-sm">
                  <div
                    className="border-[3px] border-solid h-full"
                    style={{ borderColor: accentBorder[accentColors[i]] }}
                  >
                    <div className="p-6 md:p-8">
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
                  </div>
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
            {about.experienceLabel}
          </p>
          <h2
            id="experience-heading"
            className="font-black leading-none mb-10"
            style={{ fontSize: "var(--text-heading)" }}
          >
            {about.experienceHeading}
          </h2>

          <div className="relative">
            {/* badge-planet: mid-list, right of cards */}
            <FloatingBadge
              src="/images/badge-planet.svg"
              size={96}
              rotate={-8}
              floatDistance={12}
              floatDuration={3.5}
              className="hidden lg:block absolute top-[360px] -right-[66px] z-10 pointer-events-none"
            />

            {/* badge-filters: near bottom of cards */}
            <FloatingBadge
              src="/images/badge-filters.png"
              size={80}
              rotate={8}
              floatDistance={11}
              floatDuration={3.6}
              className="hidden lg:block absolute bottom-8 -right-[43px] z-10 pointer-events-none"
            />

          <div className="space-y-4">
            {about.experience.map((job, i) => (
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
                    className="hidden lg:block absolute -bottom-[38px] -left-[34px] z-10 pointer-events-none"
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
                        {job.current ? about.currentLabel : job.period}
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
