import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  className?: string;
}

export function Container({
  children,
  className,
}: React.PropsWithChildren<ContainerProps>) {
  return (
    <main className={cn("bg-white min-h-screen antialiased px-6", className)}>
      {children}
    </main>
  );
}
