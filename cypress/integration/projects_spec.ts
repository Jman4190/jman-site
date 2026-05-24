/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('Projects', () => {
  before(() => {
    cy.visit('/projects')
  })

  it('should render projects', () => {
    cy.get('[data-cy="projects-page"]').should('be.visible')
    cy.contains('Small Tales').should('be.visible')
    cy.contains('Learn With Jabe').scrollIntoView().should('be.visible')
  })
})
