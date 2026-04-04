import * as React from 'react'
import Page, { PageHeader } from '~/components/Page'
import { NextSeo } from 'next-seo'
import BookmarksList from '~/components/Bookmarks'
import { useAuth } from '~/hooks/useAuth'
import AddBookmark from '~/components/Bookmarks/AddBookmark'
import { CenteredColumn } from '~/components/Layouts'
import BookmarksNavigation from '~/components/Bookmarks/BookmarksNavigation'
import routes from '~/config/routes'
import BackLink from '~/components/BackLink'

export default function BookmarksPage({ category }) {
  const { isMe } = useAuth()

  return (
    <Page>
      <NextSeo
        title={routes.bookmarks.seo.title}
        description={routes.bookmarks.seo.description}
        openGraph={routes.bookmarks.seo.openGraph}
      />

      <CenteredColumn>
        <div data-cy="bookmarks" className="space-y-8">
          <BackLink href="/projects" label="Projects" />
          <PageHeader
            title="Bookmarks"
            subtitle="Internet masterpieces that I'm constantly referencing'."
          />
          {isMe && <AddBookmark />}
          <BookmarksNavigation />
          <BookmarksList category={category} />
        </div>
      </CenteredColumn>
    </Page>
  )
}
