import { describe, expect, it } from 'vitest'
import { mediumPosts } from '~/data/writing'
import { generateRssFeed } from '~/pages/writing/rss'

describe('writing data', () => {
  it('has stable Medium links for every post', () => {
    expect(mediumPosts.length).toBeGreaterThan(0)

    for (const post of mediumPosts) {
      expect(post.title).toBeTruthy()
      expect(post.slug).toBeTruthy()
      expect(post.medium_url).toMatch(/^https:\/\/jman4190\.medium\.com\//)
      expect(Number.isNaN(new Date(post.published_at).getTime())).toBe(false)
    }
  })

  it('renders the newest post first in RSS', () => {
    const feed = generateRssFeed(mediumPosts)
    const newest = [...mediumPosts].sort(
      (a, b) =>
        new Date(b.published_at).getTime() -
        new Date(a.published_at).getTime()
    )[0]

    expect(feed).toContain("John Mannelly's Writing")
    expect(feed.indexOf(`<title>${newest.title}</title>`)).toBeGreaterThan(-1)
    expect(feed).toContain(newest.medium_url)
  })
})
