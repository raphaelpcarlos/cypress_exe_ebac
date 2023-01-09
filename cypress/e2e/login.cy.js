/// <reference types= "Cypress" />

describe('template spec', () => {

  let infoUser

  beforeEach(() => {
    cy.visit('/minha-conta/')
  })

  before(()=>{
    cy.acess().then(res => {
      infoUser = res
    })
  })

  after(() => {
    cy.clearCookies()
  })

  it('Realizar cadastro usuário ', () => {

    cy.cadastroUser(infoUser.uEmail,infoUser.uPass)

  })

  it('Cadastro senha fraca ', () => {

    cy.get('#reg_email').type(infoUser.uEmail)
    cy.get('#reg_password').type('123')
    cy.get('.woocommerce-password-strength')
      .should('contain', 'Digite uma senha segura.')

  })

  it('Realizar Login', () => {


    cy.get('#username').type(infoUser.uEmail)
    cy.get('#password').type(infoUser.uPass)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
      .should('contain', 'Olá')

  })

  it('Realizar Login insucesso', () => {

    cy.get('#username').type(infoUser.uEmail)
    cy.get('#password').type("123")
    cy.get('.woocommerce-form > .button').click()

    cy.get('[class="woocommerce-error"]')
      .should('be.visible')
    
  })
})