import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-normal text-center rounded-none font-heading font-bold tracking-wider uppercase disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:scale-105 transition-transform duration-300",
        destructive:
          "bg-white text-black hover:scale-105 transition-transform duration-300",
        outline:
          "bg-white text-black hover:scale-105 transition-transform duration-300",
        secondary:
          "bg-white text-black hover:scale-105 transition-transform duration-300",
        ghost:
          "bg-white text-black hover:scale-105 transition-transform duration-300",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 pt-5 pb-3 text-base h-auto has-[>svg]:px-4",
        sm: "rounded-none gap-1.5 px-4 pt-4 pb-4 text-sm h-auto has-[>svg]:px-3",
        lg: "rounded-none px-8 pt-7 pb-5 text-xl h-auto has-[>svg]:px-6",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
