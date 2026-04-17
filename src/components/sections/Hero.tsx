"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/Badge"

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
      className="relative min-h-[85vh] flex items-center border-b-2 border-black"
    >
      <Container>
        <div className="flex flex-col items-center text-center py-16 md:py-24">

          {/* ── Central element: hero text image + floating badges ── */}
          <div className="relative w-full max-w-[580px] mx-auto">
            <motion.div {...fadeUp(0.05)}>
              <Image
                src="/images/annaHeroText.png"
                alt="UI/UX Product Designer"
                width={600}
                height={370}
                priority
                className="w-full h-auto"
              />
            </motion.div>

            {/* ★ — top-left */}
            {!shouldReduce && (
              <motion.div
                className="absolute -top-6 -left-2 z-10"
                variants={float(0)}
                animate="animate"
              >
                <Badge label="★" color="mint" rotate={12} />
              </motion.div>
            )}

            {/* ✦ — right side, vertically centred */}
            {!shouldReduce && (
              <motion.div
                className="absolute top-1/3 -right-5 z-10"
                variants={float(1)}
                animate="animate"
              >
                <Badge label="✦" color="lavender" rotate={-7} />
              </motion.div>
            )}

            {/* ✺ — bottom-right */}
            {!shouldReduce && (
              <motion.div
                className="absolute -bottom-4 right-6 z-10"
                variants={float(2)}
                animate="animate"
              >
                <Badge label="✺" color="pink" rotate={9} />
              </motion.div>
            )}

            {/* badge-eye — left side, desktop only, clear of text below */}
            {!shouldReduce && (
              <div
                className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-20 z-10 pointer-events-none"
                style={{ transform: "translateY(-50%) rotate(-8deg)" }}
              >
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image src="/images/badge-eye.svg" alt="" width={96} height={96} aria-hidden />
                </motion.div>
              </div>
            )}
          </div>

          {/* ── Description text ── */}
          <motion.p
            className="mt-10 max-w-sm text-sm leading-relaxed opacity-70"
            {...fadeUp(0.25)}
          >
            Crafting user-centred digital experiences that scale. Based in Rio
            de Janeiro — available for remote opportunities worldwide.
          </motion.p>

        </div>
      </Container>
    </section>
  )
}
