"use client"

import * as React from "react"
import { Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  isSuccess?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      isSuccess = false,
      children,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<
      Array<{ id: number; x: number; y: number; size: number }>
    >([])
    const [motionSafe, setMotionSafe] = React.useState(true)

    React.useEffect(() => {
      if (typeof window === "undefined") return
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const cores = navigator.hardwareConcurrency ?? 8
      setMotionSafe(!prefersReduced && cores > 4)
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !isLoading && motionSafe) {
        if (!(event.clientX === 0 && event.clientY === 0)) {
          const rect = event.currentTarget.getBoundingClientRect()
          const size = Math.max(rect.width, rect.height)
          const x = event.clientX - rect.left - size / 2
          const y = event.clientY - rect.top - size / 2
          const id = Date.now() + Math.random()
          setRipples((prev) => [...prev, { id, x, y, size }])
          window.setTimeout(() => {
            setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
          }, 600)
        }
      }

      onClick?.(event)
    }

    const showSpinner = isLoading && !isSuccess
    const showSuccess = isSuccess && !isLoading

    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-medium",
          "transition-transform transition-shadow motion-reduce:transform-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.95] hover:scale-[1.03] hover:shadow-lg",
          {
            // Variants
            "bg-primary text-white hover:bg-primary-600 focus-visible:ring-primary": 
              variant === "primary",
            "border-2 border-secondary text-secondary-700 hover:bg-secondary-50 focus-visible:ring-secondary": 
              variant === "secondary",
            "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-300": 
              variant === "ghost",
            "bg-emerald-600 text-white hover:bg-emerald-600 focus-visible:ring-emerald-400": isSuccess,
            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        aria-busy={isLoading || undefined}
        disabled={disabled || isLoading}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className={cn(
              "absolute rounded-full opacity-40",
              "animate-ripple motion-reduce:animate-none",
              variant === "secondary" || variant === "ghost" ? "bg-primary/30" : "bg-white/60"
            )}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
        {showSpinner ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        {showSuccess ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
        <span className={isLoading ? "opacity-80" : undefined}>{children}</span>
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
