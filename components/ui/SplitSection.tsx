import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import SectionHeading from '@/components/ui/SectionHeading'

type SplitSectionProps = {
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2'
  variant?: 'page' | 'compact'
}

export default function SplitSection({
  eyebrow,
  title,
  intro,
  children,
  className,
  as = 'h1',
  variant = 'page',
}: SplitSectionProps) {
  return (
    <div
      className={cn(
        'grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24',
        className,
      )}
    >
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        as={as}
        variant={variant}
      />
      <div>{children}</div>
    </div>
  )
}
