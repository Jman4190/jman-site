/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  it('should render the primary homepage sections', () => {
    cy.get('[data-cy="home-page"]').should('be.visible')
    cy.contains('Howdy').should('be.visible')
    cy.contains('Recent Writing').scrollIntoView().should('be.visible')
    cy.contains('Side Projects').scrollIntoView().should('be.visible')
  })

  it('should link to the primary screens', () => {
    cy.contains('a', 'About').should('have.attr', 'href', '/about')
    cy.contains('a', 'Writing').should('have.attr', 'href', '/writing')
    cy.contains('a', 'Projects').should('have.attr', 'href', '/projects')
  })
})
