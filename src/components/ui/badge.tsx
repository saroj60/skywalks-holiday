import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#0ea5e9] text-white",
        orange: "bg-[#f97316] text-white",
        navy: "bg-[#0a1628] text-white",
        outline: "border border-[#0ea5e9] text-[#0ea5e9] bg-transparent",
        success: "bg-emerald-500 text-white",
        muted: "bg-[#f1f5f9] text-[#475569]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
