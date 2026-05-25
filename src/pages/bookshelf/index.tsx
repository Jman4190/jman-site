import * as React from 'react'
import { Seo } from '~/components/Seo'
import Link from 'next/link'
import routes from '~/config/routes'
import Page, { PageHeader } from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import Book3DFlip from '~/components/Bookshelf/Book3DFlip'
import { bookshelfBooks } from '~/data/bookshelf'

export default function Bookshelf() {
  return (
    <Page>
      <Seo
        title={routes.bookshelf.seo.title}
        description={routes.bookshelf.seo.description}
        openGraph={routes.bookshelf.seo.openGraph}
      />

      <CenteredColumn>
        <div data-cy="bookshelf-page" className="space-y-8">
          <Link
            href="/projects"
            className="leading-snug text-tertiary hover:text-gray-1000 dark:hover:text-gray-100"
          >
            &larr; Projects
          </Link>

          <PageHeader
            title="Bookshelf"
            subtitle="An interactive shelf of books I have read. Open any book to see my favorite quotes."
          />

          <Book3DFlip books={bookshelfBooks} />
        </div>
      </CenteredColumn>
    </Page>
  )
}
