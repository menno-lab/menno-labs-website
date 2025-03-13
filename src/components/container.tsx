import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  className?: string;
}

export function Container({
  children,
  className,
}: React.PropsWithChildren<ContainerProps>) {
  return <main className={cn("px-6", className)}>{children}</main>;
}
