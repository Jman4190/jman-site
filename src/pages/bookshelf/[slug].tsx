import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Seo } from '~/components/Seo'
import Page from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import { baseUrl } from '~/config/seo'
import { BookshelfBook, bookshelfBooks } from '~/data/bookshelf'

interface Props {
  book: BookshelfBook
}

export default function BookshelfBookPage({ book }: Props) {
  const router = useRouter()

  React.useEffect(() => {
    if (!router.isFallback && !book) {
      router.push('/bookshelf')
    }
  }, [book, router])

  if (router.isFallback) {
    return (
      <Page>
        <CenteredColumn>
          <p className="text-tertiary">Loading...</p>
        </CenteredColumn>
      </Page>
    )
  }

  if (!book) return null

  const description = `Favorite quotes and key takeaways from ${book.title}.`

  return (
    <Page>
      <Seo
        title={`${book.title} · Bookshelf`}
        description={description}
        openGraph={{
          url: `${baseUrl}/bookshelf/${book.slug}`,
          title: `${book.title} · Bookshelf`,
          description,
          site_name: 'Bookshelf',
          images: [
            {
              url: `${baseUrl}${book.coverImage}`,
              alt: book.title,
            },
          ],
        }}
      />

      <CenteredColumn>
        <div data-cy="bookshelf-detail-page" className="space-y-8">
          <Link
            href="/bookshelf"
            className="leading-snug text-tertiary hover:text-gray-1000 dark:hover:text-gray-100"
          >
            &larr; Bookshelf
          </Link>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Image
              src={book.coverImage}
              alt={book.title}
              width={128}
              height={192}
              loading="eager"
              sizes="128px"
              className="w-32 h-48 rounded-md object-cover shadow-md"
            />
            <div className="space-y-2">
              <h1
                data-cy="bookshelf-detail-title"
                className="font-sans text-2xl font-black md:text-4xl text-primary"
              >
                {book.title}
              </h1>
              {book.author && <p className="text-tertiary">By {book.author}</p>}
              <p className="text-tertiary">
                Favorite quotes and key takeaways from this book.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {book.quotes.length > 0 ? (
              book.quotes.map((quote) => (
                <blockquote
                  key={quote.id}
                  data-cy="bookshelf-quote"
                  className="p-5 bg-elevated rounded-lg border border-gray-200 dark:border-gray-800"
                >
                  <p className="text-lg leading-relaxed text-primary">
                    {quote.text}
                  </p>
                  {quote.takeaway && (
                    <div
                      data-cy="bookshelf-takeaway"
                      className="pl-4 mt-4 border-l-2 border-gray-300 dark:border-gray-700"
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-tertiary">
                        Key takeaway
                      </p>
                      <p className="mt-2 leading-relaxed text-secondary">
                        {quote.takeaway}
                      </p>
                    </div>
                  )}
                  {quote.source && (
                    <cite className="block mt-3 not-italic text-sm text-tertiary">
                      {quote.source}
                    </cite>
                  )}
                </blockquote>
              ))
            ) : (
              <p className="text-tertiary">
                No quotes are saved for this book yet.
              </p>
            )}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticPaths() {
  const paths = bookshelfBooks.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      book: bookshelfBooks.find((entry) => entry.slug === slug) || null,
    },
  }
}
