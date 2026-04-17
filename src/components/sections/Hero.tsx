"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/Badge"

const photoBadges = [
  { label: "★", color: "mint" as const, rotate: 12, pos: "absolute -top-5 left-6 z-10" },
  { label: "✦", color: "lavender" as const, rotate: -7, pos: "absolute top-1/3 -right-6 z-10" },
  { label: "✺", color: "pink" as const, rotate: 9, pos: "absolute -bottom-4 right-8 z-10" },
]

const float = (i: number) => ({
  animate: {
    y: [0, -(7 + i * 3), 0],
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

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-[85vh] flex items-center border-b-2 border-black overflow-hidden"
    >
      <Container>
        {/* ── Desktop: two-column split ─────────────────────────────── */}
        <div className="hidden lg:flex w-full items-start justify-between gap-8 xl:gap-16 py-16">

          {/* LEFT: graphic title + description */}
          <div className="flex-1 flex flex-col min-w-0">
            <motion.div {...fadeUp(0.05)}>
              <Image
                src="/images/annaHeroText.png"
                alt="UI/UX Product Designer"
                width={600}
                height={370}
                priority
                className="w-full max-w-[560px] h-auto"
              />
            </motion.div>

            <motion.p
              className="mt-6 max-w-sm text-sm leading-relaxed opacity-70"
              {...fadeUp(0.25)}
            >
              Crafting user-centred digital experiences that scale. Based in Rio
              de Janeiro — available for remote opportunities worldwide.
            </motion.p>
          </div>

          {/* RIGHT: rotated portrait + floating badges */}
          <div className="relative flex-shrink-0 flex items-center justify-center w-[320px] xl:w-[400px]">
            <motion.div
              className="relative w-[260px] xl:w-[320px] h-[360px] xl:h-[440px] border-2 border-black shadow-brutal"
              style={{ rotate: -2.5 }}
              {...(shouldReduce
                ? {}
                : {
                    initial: { opacity: 0, x: 30 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.65, ease: "easeOut" as const },
                  })}
            >
              <Image
                src="/images/hero-right.png"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 260px, 320px"
              />
            </motion.div>

            {/* Text emoji badges */}
            {!shouldReduce &&
              photoBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  className={badge.pos}
                  variants={float(i)}
                  animate="animate"
                >
                  <Badge label={badge.label} color={badge.color} rotate={badge.rotate} />
                </motion.div>
              ))}

            {/* badge-eye: UX observation/vision, floating at bottom-left of portrait */}
            {!shouldReduce && (
              <div
                className="absolute bottom-0 left-0 z-10 pointer-events-none"
                style={{ transform: "rotate(-8deg)" }}
              >
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image src="/images/badge-eye.svg" alt="" width={110} height={110} aria-hidden />
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* ── Mobile: stacked ────────────────────────────────────────── */}
        <div className="lg:hidden flex flex-col items-center py-12 gap-6">
          <motion.div className="w-full" {...fadeUp(0.05)}>
            <Image
              src="/images/annaHeroText.png"
              alt="UI/UX Product Designer"
              width={600}
              height={370}
              priority
              className="w-full h-auto"
            />
          </motion.div>

          <motion.p
            className="max-w-xs text-sm leading-relaxed opacity-70 text-center"
            {...fadeUp(0.2)}
          >
            Crafting user-centred digital experiences that scale. Based in Rio
            de Janeiro — available for remote opportunities worldwide.
          </motion.p>

          {/* Portrait */}
          <motion.div
            className="relative w-[200px] h-[280px] border-2 border-black shadow-brutal-sm"
            style={{ rotate: -2.5 }}
            {...fadeUp(0.35)}
          >
            <Image
              src="/images/hero-right.png"
              alt=""
              fill
              className="object-cover"
              sizes="200px"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
