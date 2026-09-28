import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#f97316] text-white hover:bg-[#ea580c] focus-visible:ring-[#f97316] shadow-lg shadow-orange-500/25",
        navy:
          "bg-[#0a1628] text-white hover:bg-[#163058] focus-visible:ring-[#0a1628]",
        sky:
          "bg-[#0ea5e9] text-white hover:bg-[#0284c7] focus-visible:ring-[#0ea5e9] shadow-lg shadow-sky-500/25",
        outline:
          "border-2 border-[#0a1628] bg-transparent text-[#0a1628] hover:bg-[#0a1628] hover:text-white",
        "outline-white":
          "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0a1628]",
        ghost:
          "bg-transparent text-[#0a1628] hover:bg-[#f1f5f9]",
        link:
          "bg-transparent text-[#0ea5e9] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-11 px-6 py-2",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(buttonVariants({ variant, size }), (children.props as { className?: string }).className, className),
        ...props,
      });
    }

    return (
      <button
        suppressHydrationWarning
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
