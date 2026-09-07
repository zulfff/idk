import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  intro?: string
  as?: 'h1' | 'h2'
  variant?: 'page' | 'compact'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = 'h1',
  variant = 'page',
  className,
}: SectionHeadingProps) {
  const titleClass =
    variant === 'page'
      ? 'text-4xl sm:text-5xl'
      : 'text-3xl sm:text-4xl'
  return (
    <div className={cn('max-w-2xl', className)}>
      <p className="eyebrow">{eyebrow}</p>
      <Tag className={cn('mt-6 font-semibold tracking-[-0.04em] text-primary', titleClass)}>
        {title}
      </Tag>
      {intro ? (
        <p className="mt-6 max-w-sm text-base leading-7 text-muted">{intro}</p>
      ) : null}
    </div>
  )
}
