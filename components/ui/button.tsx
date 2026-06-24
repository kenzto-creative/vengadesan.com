import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-sm tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-[24px] bg-white px-6 py-3 text-[#121212] hover:bg-white/90",
        outline:
          "rounded-[24px] border border-white bg-transparent px-6 py-3 text-white hover:bg-white/10",
        ghost: "rounded-full hover:bg-white/10",
        dark: "rounded-[24px] bg-[#111111] px-6 py-3 text-white hover:bg-[#1a1a1a]",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4",
        icon: "h-12 w-12",
        social: "h-12 w-12 rounded-[36px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
