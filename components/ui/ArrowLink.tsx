import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'

type ArrowLinkProps = {
  href: string
  external?: boolean
  arrow?: 'up-right' | 'down-right' | 'left'
  className?: string
  children: ReactNode
}

const ARROW_SIZE = 15

export default function ArrowLink({
  href,
  external = false,
  arrow = 'up-right',
  className,
  children,
}: ArrowLinkProps) {
  const icon =
    arrow === 'down-right' ? (
      <ArrowDownRight size={ARROW_SIZE} strokeWidth={1.8} />
    ) : arrow === 'left' ? (
      <ArrowLeft size={ARROW_SIZE} strokeWidth={1.8} />
    ) : (
      <ArrowUpRight size={ARROW_SIZE} strokeWidth={1.8} />
    )

  const classes = cn('rule-link text-sm', className)
  const content = (
    <>
      {arrow === 'left' ? icon : null}
      <span>{children}</span>
      {arrow === 'left' ? null : icon}
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
