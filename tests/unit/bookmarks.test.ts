import { describe, expect, it } from 'vitest'
import { bookmarkSections } from '~/data/bookmarks'

describe('bookmarks data', () => {
  it('has named sections with valid bookmark links', () => {
    expect(bookmarkSections.length).toBeGreaterThan(0)

    for (const section of bookmarkSections) {
      expect(section.title).toBeTruthy()
      expect(section.description).toBeTruthy()
      expect(section.bookmarks.length).toBeGreaterThan(0)

      for (const bookmark of section.bookmarks) {
        expect(bookmark.title).toBeTruthy()
        expect(bookmark.host).toBeTruthy()
        expect(bookmark.url).toMatch(/^https:\/\//)
      }
    }
  })
})
