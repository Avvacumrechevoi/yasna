import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            // Variants
            "bg-primary text-white hover:bg-primary-600 focus-visible:ring-primary": 
              variant === "primary",
            "border-2 border-secondary text-secondary-700 hover:bg-secondary-50 focus-visible:ring-secondary": 
              variant === "secondary",
            "text-primary hover:bg-primary-50 focus-visible:ring-primary/40": 
              variant === "ghost",
            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          isLoading && "cursor-wait",
          className
        )}
        ref={ref}
        disabled={isDisabled}
        aria-busy={isLoading || undefined}
        aria-disabled={isDisabled || undefined}
        {...props}
      >
        {isLoading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : null}
        <span className={cn(isLoading && "opacity-90")}>{children}</span>
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
