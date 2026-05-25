import { GetServerSideProps } from 'next'
import { mediumPosts } from '~/data/writing'
import { baseUrl } from '~/config/seo'

export function generateRssFeed(posts) {
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.published_at).getTime() -
      new Date(a.published_at).getTime()
  )

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>John Mannelly's Writing</title>
    <description>The best way to learn is to teach.</description>
    <link>${baseUrl}/writing</link>
    <atom:link href="${baseUrl}/writing/rss" rel="self" type="application/rss+xml"/>
    ${sortedPosts
      .map(
        (post) => `
      <item>
        <title>${post.title}</title>
        <description>${post.excerpt || ''}</description>
        <pubDate>${new Date(post.published_at).toUTCString()}</pubDate>
        <link>${post.medium_url}</link>
        <guid isPermaLink="true">${post.medium_url}</guid>
      </item>
    `
      )
      .join('')}
  </channel>
</rss>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (!res) {
    return {
      props: {},
    }
  }

  const feed = generateRssFeed(mediumPosts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(feed)
  res.end()

  return {
    props: {},
  }
}

export default function RSSFeed() {
  // This component doesn't render anything on the client
  return null
}
