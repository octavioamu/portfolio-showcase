import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function ProjectContent({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("leading-relaxed	space-y-2", className)}>{children}</div>
  );
}
