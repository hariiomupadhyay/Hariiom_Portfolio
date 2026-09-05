import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-xs font-mono font-bold uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-95 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-[color:var(--color-accent)] text-[color:var(--color-on-accent)] hover:opacity-90 shadow-lg shadow-[color:var(--color-accent)]/25 hover:shadow-[color:var(--color-accent)]/40 hover:-translate-y-0.5",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20",
        outline:
          "border border-[color:var(--color-border)] bg-[color:var(--color-bg-card)]/80 backdrop-blur-xl text-[color:var(--color-text-primary)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] hover:shadow-md",
        secondary:
          "bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-bg-card)] hover:border-[color:var(--color-accent)]/50",
        ghost: "hover:bg-[color:var(--color-bg-surface)] text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]",
        link: "text-[color:var(--color-accent)] underline-offset-4 hover:underline shadow-none hover:translate-y-0",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-xl px-4 text-[11px]",
        lg: "h-14 rounded-2xl px-8 text-sm",
        icon: "h-11 w-11 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }