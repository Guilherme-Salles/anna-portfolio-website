import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-8 sm:px-16 lg:px-24",
        className
      )}
    >
      {children}
    </div>
  )
}
