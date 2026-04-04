import * as React from 'react'
import Link from 'next/link'

type Props = {
  href: string
  label: string
}

export default function BackLink({ href, label }: Props) {
  return (
    <Link href={href} passHref>
      <a className="leading-snug text-tertiary hover:text-gray-1000 dark:hover:text-gray-100">
        &larr; {label}
      </a>
    </Link>
  )
}
