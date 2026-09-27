import { cn } from "cn";
import type { InputHTMLAttributes } from "react";


interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  error?: string,
}
export default function AuthInput({ label, error, ...props }: AuthInputProps) {
  return (
    <div className={cn("space-y-2",props.className)}>
      <label htmlFor={props.id} className="text-sm font-medium text-foreground">{label}</label>
      <input {...props} className={cn(`h-12 w-full rounded-ui px-4 text-sm text-foreground outline-none transition
        bg-glass border border-glass-border
        placeholder:text-muted
        focus:border-primary
        focus:ring-3 
        focus:ring-primary/10` , error ? `border-red-500 focus:border-red-500 focus:ring-red-500/10` : "")} />
      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
