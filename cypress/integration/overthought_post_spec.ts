/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { mediumPosts } from '../../src/data/writing'

const post = mediumPosts[0]

describe('Posts index', () => {
  it('should render post', () => {
    cy.visit(`/writing/${post.slug}`)
    cy.get('[data-cy="post"]').scrollIntoView().should('be.visible')
    cy.contains(post.title)
  })

  it('should render 404', () => {
    cy.visit('/writing/foobar')
    cy.wait(1000)
    cy.get('[data-cy="post-not-found"]').scrollIntoView().should('be.visible')
  })

  it('should render newsletter', () => {
    cy.visit(`/writing/${post.slug}`)
    cy.get('[data-cy="writing-subscribe-box"]')
      .scrollIntoView()
      .should('be.visible')
  })
})
