import type { ReactNode } from "react";
import { cn } from "cn";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}
export default function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div
      className={cn(
        "w-full rounded-card border border-glass-border bg-glass p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-7 lg:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
