import { cn } from "@/lib/utils"

interface BadgeProps {
  label: string
  color?: "lavender" | "mint" | "pink"
  rotate?: number
  className?: string
}

const colorMap = {
  lavender: "bg-lavender",
  mint: "bg-mint",
  pink: "bg-pink",
}

export function Badge({
  label,
  color = "lavender",
  rotate = 0,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 text-xs font-bold text-black border-2 border-black shadow-brutal-sm select-none",
        colorMap[color],
        className
      )}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {label}
    </span>
  )
}
