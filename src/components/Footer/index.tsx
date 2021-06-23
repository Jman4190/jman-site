import React from 'react'
import Link from 'next/link'
import { CenteredColumn } from '../Layouts'

export function Footer() {
  return (
    <CenteredColumn>
      <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke" />
      <div className="grid grid-cols-1 gap-4 p-6 py-24 bg-gray-100 sm:grid-cols-3 dark:bg-gray-900 sm:bg-gray-50 sm:dark:bg-gray-1000">
        <div className="space-y-4 ">
          <Link href="/" as="/" passHref>
            <a className="black-link">Home</a>
          </Link>

          <Link href="/about" as="/about" passHref>
            <a className="black-link">About</a>
          </Link>

          <a href="https://twitter.com/jman4190" className="black-link">
            @jman4190
          </a>
        </div>

        <div className="space-y-4 ">
          <Link href="/writing" as="/writing" passHref>
            <a className="black-link">Writing</a>
          </Link>
          
          <Link href="/app-dissection" as="/app-dissection" passHref>
            <a className="black-link">App Dissection</a>
          </Link>
        </div>

        <div className="space-y-4 ">
          <Link href="/bookmarks" as="/bookmarks" passHref>
            <a className="black-link">Bookmarks</a>
          </Link>

        </div>
      </div>
    </CenteredColumn>
  )
}
