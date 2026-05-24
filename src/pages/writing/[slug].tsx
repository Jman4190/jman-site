import * as React from 'react'
import { NextSeo } from 'next-seo'
import Page from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import WritingSubscribeBox from '~/components/Writing/Subscribe'
import NotFound from '~/components/Writing/NotFound'
import BackLink from '~/components/BackLink'
import { MediumPost, mediumPosts } from '~/data/writing'
import { baseUrl } from '~/config/seo'

interface Props {
  post: MediumPost | null
}

export default function WritingPost({ post }: Props) {
  if (!post) {
    return (
      <Page>
        <CenteredColumn>
          <NotFound />
        </CenteredColumn>
      </Page>
    )
  }

  const date = new Date(post.published_at).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Page>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          url: `${baseUrl}/writing/${post.slug}`,
          title: post.title,
          description: post.excerpt,
          site_name: 'Writing',
        }}
      />

      <CenteredColumn>
        <div data-cy="post" className="space-y-8">
          <BackLink href="/writing" label="Writing" />

          <div className="space-y-4">
            <h1 className="font-sans text-2xl font-extrabold md:text-4xl text-primary">
              {post.title}
            </h1>
            <span className="inline-block leading-snug text-tertiary">
              {date}
            </span>
          </div>

          {post.excerpt && <p className="text-tertiary">{post.excerpt}</p>}

          <a
            href={post.medium_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline font-medium text-primary highlight-link-hover"
          >
            Read on Medium
          </a>
        </div>

        <div className="mt-32">
          <WritingSubscribeBox />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticPaths() {
  const paths = mediumPosts.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      post: mediumPosts.find((entry) => entry.slug === slug) || null,
    },
  }
}
