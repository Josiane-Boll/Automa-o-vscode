/// <reference types="cypress" />

describe('Pagina automação', () => {
  it('Validar acesso a página contatos', () => {
    cy.visit('https://laborit.com.br/contato')
  })
})