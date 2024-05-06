/// <reference types="cypress" />

describe('Pagina automação', () => {
  it('Validar acesso a página comunidade', () => {
    cy.visit('https://laborit.com.br/comunidade')
  })
})