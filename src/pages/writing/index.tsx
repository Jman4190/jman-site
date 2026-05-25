import * as React from 'react'
import Page, { PageHeader } from '~/components/Page'
import WritingSubscribeBox from '~/components/Writing/Subscribe'
import PostsList from '~/components/Writing/List'
import { CenteredColumn } from '~/components/Layouts'
import Head from 'next/head'
import { Seo } from '~/components/Seo'
import routes from '~/config/routes'
import { MediumPost, mediumPosts } from '~/data/writing'

interface Props {
  data: {
    posts: MediumPost[]
  }
}

function Writing({ data }: Props) {
  return (
    <Page>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS feed"
          href="/writing/rss"
        />
      </Head>

      <Seo
        title={routes.writing.seo.title}
        description={routes.writing.seo.description}
        openGraph={routes.writing.seo.openGraph}
      />

      <CenteredColumn>
        <div data-cy="writing" className=" space-y-12">
          <PageHeader
            title={routes.writing.seo.title}
            subtitle={routes.writing.seo.description}
          />

          <WritingSubscribeBox />
          <div className=" space-y-6">
            {data && data.posts && <PostsList posts={data.posts} />}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps() {
  const posts = [...mediumPosts].sort(
    (a, b) =>
      new Date(b.published_at).getTime() -
      new Date(a.published_at).getTime()
  )

  return {
    props: {
      data: {
        posts,
      },
    },
  }
}

export default Writing
