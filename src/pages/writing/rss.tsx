import { GetServerSideProps } from 'next'
import { mediumPosts } from '~/data/writing'

function generateRssFeed(posts) {
  const site_url = 'https://brianlovin.com'
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Brian Lovin's Writing</title>
    <description>The best way to learn is to teach.</description>
    <link>${site_url}/writing</link>
    <atom:link href="${site_url}/writing/rss" rel="self" type="application/rss+xml"/>
    ${posts
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
