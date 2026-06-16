import type { InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export function Input({ className, label, id, ...props }: InputProps) {
  const inputId = id ?? props.name

  return (
    <label className="flex flex-col gap-1.5 text-sm text-slate-700">
      {label ? <span className="font-medium">{label}</span> : null}
      <input
        id={inputId}
        className={cn(
          'rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-indigo-500 placeholder:text-slate-400 focus:ring-2',
          className,
        )}
        {...props}
      />
    </label>
  )
}
