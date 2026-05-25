import { describe, expect, it } from 'vitest'
import { bookshelfBooks } from '~/data/bookshelf'

describe('bookshelf data', () => {
  it('has unique slugs and valid book records', () => {
    const slugs = new Set<string>()

    for (const book of bookshelfBooks) {
      expect(book.title).toBeTruthy()
      expect(book.author).toBeTruthy()
      expect(book.coverImage).toMatch(/^\/static\/img\/bookshelf\/.+\.jpg$/)
      expect(slugs.has(book.slug)).toBe(false)
      slugs.add(book.slug)
    }
  })

  it('keeps quote takeaways clean', () => {
    const quotes = bookshelfBooks.flatMap((book) => book.quotes)

    expect(quotes.length).toBeGreaterThan(0)
    for (const quote of quotes) {
      expect(quote.text).toBeTruthy()
      expect(quote.takeaway || '').not.toContain('KT:')
    }
  })
})
