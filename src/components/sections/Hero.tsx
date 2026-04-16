"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"

const skillBadges = [
  { label: "UX Research", color: "lavender" as const, rotate: -6, x: "8%", y: "18%" },
  { label: "UI Design", color: "mint" as const, rotate: 4, x: "72%", y: "12%" },
  { label: "Prototyping", color: "pink" as const, rotate: -3, x: "80%", y: "60%" },
  { label: "Design Systems", color: "lavender" as const, rotate: 5, x: "5%", y: "65%" },
  { label: "User Testing", color: "mint" as const, rotate: -4, x: "60%", y: "80%" },
]

const floatVariants = (i: number) => ({
  animate: {
    y: [0, -(8 + i * 3), 0],
    rotate: [0, i % 2 === 0 ? 2 : -2, 0],
    transition: {
      duration: 3.5 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
})

export function Hero() {
  const shouldReduce = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        }

  const slideIn = (direction: "left" | "right") =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, x: direction === "left" ? -24 : 24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.65, ease: "easeOut" as const },
        }

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-[85vh] flex items-center border-b-2 border-black dark:border-white overflow-hidden"
    >
      {/* Desktop: two-image layout */}
      <div className="hidden lg:flex w-full items-center justify-between">
        {/* Left image */}
        <motion.div
          className="relative w-[300px] xl:w-[360px] h-[480px] xl:h-[560px] flex-shrink-0 border-r-2 border-black dark:border-white"
          {...slideIn("left")}
        >
          <Image
            src="/images/hero-left.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="360px"
          />
        </motion.div>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 xl:px-12 relative py-16">
          {/* Floating badges — desktop only */}
          {!shouldReduce &&
            skillBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="absolute hidden lg:block"
                style={{ left: badge.x, top: badge.y }}
                variants={floatVariants(i)}
                animate="animate"
              >
                <Badge
                  label={badge.label}
                  color={badge.color}
                  rotate={badge.rotate}
                />
              </motion.div>
            ))}

          <motion.p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-lavender"
            {...fadeUp(0.1)}
          >
            UX/UI Product Designer
          </motion.p>
          <motion.h1
            className="font-black leading-none tracking-tight mb-6"
            style={{ fontSize: "var(--text-hero)" }}
            {...fadeUp(0.2)}
          >
            Anna
            <br />
            Bengaly
          </motion.h1>
          <motion.p
            className="max-w-sm text-sm leading-relaxed mb-8 opacity-75"
            {...fadeUp(0.35)}
          >
            Crafting user-centred digital experiences that scale. Based in Rio
            de Janeiro — available for remote opportunities worldwide.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3"
            {...fadeUp(0.5)}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-lavender text-black font-bold text-sm border-2 border-black shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all duration-150"
            >
              View Work
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-transparent text-black dark:text-white font-bold text-sm border-2 border-black dark:border-white shadow-brutal-sm dark:shadow-brutal-sm-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal dark:hover:shadow-brutal-white transition-all duration-150"
            >
              About Me
            </Link>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          className="relative w-[300px] xl:w-[360px] h-[480px] xl:h-[560px] flex-shrink-0 border-l-2 border-black dark:border-white"
          {...slideIn("right")}
        >
          <Image
            src="/images/hero-right.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="360px"
          />
        </motion.div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="lg:hidden w-full flex flex-col items-center text-center px-4 py-16">
        <motion.p
          className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-lavender"
          {...fadeUp(0.1)}
        >
          UX/UI Product Designer
        </motion.p>
        <motion.h1
          className="font-black leading-none tracking-tight mb-4"
          style={{ fontSize: "var(--text-hero)" }}
          {...fadeUp(0.2)}
        >
          Anna
          <br />
          Bengaly
        </motion.h1>
        <motion.p
          className="max-w-xs text-sm leading-relaxed mb-6 opacity-75"
          {...fadeUp(0.35)}
        >
          Crafting user-centred digital experiences that scale. Based in Rio de
          Janeiro — available for remote opportunities worldwide.
        </motion.p>

        {/* Mobile badge strip */}
        <motion.div
          className="flex gap-2 overflow-x-auto pb-2 mb-8 w-full justify-center flex-wrap"
          aria-label="Skills"
          {...fadeUp(0.45)}
        >
          {skillBadges.map((badge) => (
            <Badge key={badge.label} label={badge.label} color={badge.color} />
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          {...fadeUp(0.55)}
        >
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-lavender text-black font-bold text-sm border-2 border-black shadow-brutal-sm"
          >
            View Work
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border-2 border-black dark:border-white font-bold text-sm shadow-brutal-sm dark:shadow-brutal-sm-white"
          >
            About Me
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
