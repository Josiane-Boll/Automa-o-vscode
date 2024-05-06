/// <reference types="cypress" />

describe('Página Automação', () => {
  it('Validar botão LinkedIn', () => {
    cy.visit('https://laborit.com.br/')
    cy.get('.Redes sociais') .scrollTo('bottom Left') // Scroll 'redes sociais' to its bottom
    cy.get(':[d="M20.8075 14.6288C20.8075 11.3042 19.0302 9.75684 16.6596 9.75684C14.747 9.75684 13.8906 10.8074 13.4125 11.5444V10.0113H9.80957C9.85705 11.027 9.80957 20.8353 9.80957 20.8353H13.4125V14.7903C13.4125 14.4668 13.4359 14.1441 13.5311 13.9125C13.7915 13.2662 14.3843 12.5971 15.3796 12.5971C16.6837 12.5971 17.205 13.5896 17.205 15.0441V20.835H20.8073L20.8075 14.6288Z"]').click()
    cy.visit('https://www.linkedin.com/company/laboritbrasil')
  })
})