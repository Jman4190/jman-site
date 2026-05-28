import { describe, expect, it } from 'vitest'
import { getPostsNewestFirst, getRecentPosts, mediumPosts } from '~/data/writing'
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
    const newest = getPostsNewestFirst()[0]

    expect(feed).toContain("John Mannelly's Writing")
    expect(feed.indexOf(`<title>${newest.title}</title>`)).toBeGreaterThan(-1)
    expect(feed).toContain(newest.medium_url)
  })

  it('returns writing posts newest first without changing the source list', () => {
    const originalPostIds = mediumPosts.map((post) => post.id)
    const sortedPosts = getPostsNewestFirst()

    expect(mediumPosts.map((post) => post.id)).toEqual(originalPostIds)

    for (let index = 1; index < sortedPosts.length; index += 1) {
      const previousDate = new Date(
        sortedPosts[index - 1].published_at
      ).getTime()
      const currentDate = new Date(sortedPosts[index].published_at).getTime()

      expect(previousDate).toBeGreaterThanOrEqual(currentDate)
    }
  })

  it('returns the requested number of recent writing posts', () => {
    expect(getRecentPosts(3)).toEqual(getPostsNewestFirst().slice(0, 3))
  })
})
