import * as React from 'react'
import BackLink from '~/components/BackLink'
import { CenteredColumn } from '~/components/Layouts'
import Page, { PageHeader } from '~/components/Page'
import { Seo } from '~/components/Seo'
import routes from '~/config/routes'
import { bookmarkSections } from '~/data/bookmarks'

export default function BookmarksPage() {
  return (
    <Page>
      <Seo
        title={routes.bookmarks.seo.title}
        description={routes.bookmarks.seo.description}
        openGraph={routes.bookmarks.seo.openGraph}
      />

      <CenteredColumn>
        <div data-cy="bookmarks" className="space-y-8">
          <BackLink href="/projects" label="Projects" />
          <PageHeader
            title="Bookmarks"
            subtitle="Internet masterpieces that I'm constantly referencing."
          />

          <div className="space-y-10">
            {bookmarkSections.map((section) => (
              <section key={section.title} className="space-y-4">
                <div className="space-y-1">
                  <h2 className="font-sans text-lg font-bold text-primary">
                    {section.title}
                  </h2>
                  <p className="text-tertiary">{section.description}</p>
                </div>

                <div className="space-y-5">
                  {section.bookmarks.map((bookmark) => (
                    <article
                      key={bookmark.url}
                      className="space-y-1"
                      data-cy="bookmark-list-item"
                    >
                      <a
                        href={bookmark.url}
                        className="font-medium text-primary highlight-link-hover"
                      >
                        {bookmark.title}
                      </a>
                      <div className="text-sm text-quaternary">
                        {bookmark.host}
                      </div>
                      {bookmark.description && (
                        <p className="text-tertiary">{bookmark.description}</p>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
