import type { SelectHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

type SelectOption<T extends string> = {
  value: T
  label: string
}

type SelectProps<T extends string> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
> & {
  label?: string
  options: SelectOption<T>[]
  onChange: (value: T) => void
}

export function Select<T extends string>({
  className,
  label,
  options,
  onChange,
  id,
  value,
  ...props
}: SelectProps<T>) {
  const selectId = id ?? props.name

  return (
    <label className="flex flex-col gap-1.5 text-sm text-slate-700">
      {label ? <span className="font-medium">{label}</span> : null}
      <select
        id={selectId}
        value={value}
        className={cn(
          'rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-indigo-500 focus:ring-2',
          className,
        )}
        onChange={(event) => onChange(event.target.value as T)}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
