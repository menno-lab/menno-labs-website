import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "outline" | "underline" | "ghost";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "outline", type, ...props }, ref) => {
    const variantClasses = {
      outline: "",
      ghost: "border-0 focus-visible:outline-0",
      underline:
        "rounded-none border-0 border-b-2 focus:border-b-2 focus:border-primary focus:outline-none",
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:rounded-none disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
