/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

const firstBook = {
  slug: 'antifragile-things-that-gain-from-disorder',
  title: 'Antifragile: Things That Gain From Disorder',
}

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
  })
})
