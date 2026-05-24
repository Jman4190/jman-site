/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

const firstBook = {
  slug: 'antifragile-things-that-gain-from-disorder',
  title: 'Antifragile: Things That Gain From Disorder',
}

const mergedBook = {
  slug: 'competing-against-luck-the-story-of-innovation-and-customer-choice',
  duplicateSlug: 'competing-against-luck',
}

const scoreBook = {
  slug: 'the-score-takes-care-of-itself',
  title: 'The Score Takes Care of Itself',
}

const addedBooks = [
  'building-microservices-designing-fine-grained-systems',
  'shortcut-how-analogies-reveal-connections-spark-innovation-and-sell-our-greatest-ideas',
  'the-paradox-of-choice-why-more-is-less',
  'the-signal-and-the-noise',
  'what-customers-want',
  'wooden-on-leadership-how-to-create-a-winning-organization',
  'zero-to-one-notes-on-startups-or-how-to-build-the-future',
]

describe('Bookshelf', () => {
  before(() => {
    cy.visit('/bookshelf')
  })

  it('should render bookshelf page and shelf', () => {
    cy.get('[data-cy="bookshelf-page"]').scrollIntoView().should('be.visible')
    cy.get('[data-cy="bookshelf-shelf"]').should('be.visible')
  })

  it('should show at least one book', () => {
    cy.get('[data-cy="bookshelf-book-link"]').its('length').should('be.gte', 1)
  })

  it('should only show one entry for duplicate title variants', () => {
    cy.get(`[data-book-slug="${mergedBook.slug}"]`).should('have.length', 1)
    cy.get(`[data-book-slug="${mergedBook.duplicateSlug}"]`).should('not.exist')
    cy.get('[data-book-slug="the-tao-of-physics"]').should('have.length', 1)
    cy.get('[data-book-slug="tao-of-physics"]').should('not.exist')
  })

  it('should include books added from the quote CSV', () => {
    addedBooks.forEach((slug) => {
      cy.get(`[data-book-slug="${slug}"]`).should('have.length', 1)
    })
  })

  it('should use 3 books per row on phone widths', () => {
    cy.viewport('iphone-6')
    cy.visit('/bookshelf')
    cy.get('[data-cy="bookshelf-shelf"]')
      .invoke('attr', 'data-books-per-row')
      .should('eq', '3')
    cy.get('[data-cy="bookshelf-row"]')
      .first()
      .find('[data-cy="bookshelf-book-link"]')
      .should('have.length', 3)
  })

  it('should require two taps to navigate on mobile touch', () => {
    cy.viewport('iphone-6')
    cy.visit('/bookshelf')
    cy.get(`[data-book-slug="${firstBook.slug}"]`).click({ force: true })
    cy.location('pathname').should('eq', '/bookshelf')
    cy.get(`[data-book-slug="${firstBook.slug}"]`).should(
      'have.attr',
      'aria-current',
      'true'
    )
    cy.get(`[data-book-slug="${firstBook.slug}"]`).click({ force: true })
    cy.location('pathname').should('eq', `/bookshelf/${firstBook.slug}`)
  })

  it('should navigate to a book detail page with quotes', () => {
    cy.viewport(1300, 900)
    cy.visit('/bookshelf')
    cy.get(`[data-book-slug="${firstBook.slug}"]`).click({ force: true })
    cy.location('pathname').should('eq', `/bookshelf/${firstBook.slug}`)
    cy.get('[data-cy="bookshelf-detail-title"]').contains(firstBook.title)
    cy.get('[data-cy="bookshelf-quote"]').its('length').should('be.gte', 1)
    cy.get('[data-cy="bookshelf-takeaway"]').its('length').should('be.gte', 1)
    cy.get('[data-cy="bookshelf-takeaway"]')
      .first()
      .should('not.contain', 'KT:')
  })

  it('should render a book detail page cleanly on phone widths', () => {
    cy.viewport('iphone-6')
    cy.visit('/bookshelf')
    cy.get(`[data-book-slug="${scoreBook.slug}"]`).click({ force: true })
    cy.get(`[data-book-slug="${scoreBook.slug}"]`).click({ force: true })
    cy.location('pathname').should('eq', `/bookshelf/${scoreBook.slug}`)
    cy.get('[data-cy="bookshelf-detail-page"]').should('be.visible')
    cy.get('[data-cy="bookshelf-detail-title"]').contains(scoreBook.title)
    cy.get('[data-cy="bookshelf-quote"]').its('length').should('be.gte', 1)
    cy.get('[data-cy="bookshelf-takeaway"]').its('length').should('be.gte', 1)
    cy.window().then((win) => {
      expect(win.document.documentElement.scrollWidth).to.be.at.most(
        win.innerWidth + 1
      )
    })
  })
})
