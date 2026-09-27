import type { ReactNode } from "react";

interface SocialButtonProps { children: ReactNode, icon: ReactNode }

export default function SocialButton({ children, icon }: SocialButtonProps) {
  return (
    <button type="button" className="h-12 w-full flex items-center justify-center gap-3 rounded-ui
        border border-glass-border bg-glass text-sm font-medium text-foreground backdrop-blur-md transition
        hover:bg-glass-active active:scale-[0.98]">
      {icon}
      {children}
    </button>
  )
}
