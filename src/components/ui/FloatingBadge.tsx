"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface FloatingBadgeProps {
  src: string
  size: number
  rotate?: number
  floatDistance?: number
  floatDuration?: number
  className?: string
}

export function FloatingBadge({
  src,
  size,
  rotate = 0,
  floatDistance = 10,
  floatDuration = 3,
  className,
}: FloatingBadgeProps) {
  return (
    <div
      className={className}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <motion.div
        animate={{ y: [0, -floatDistance, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={src} alt="" width={size} height={size} aria-hidden />
      </motion.div>
    </div>
  )
}
