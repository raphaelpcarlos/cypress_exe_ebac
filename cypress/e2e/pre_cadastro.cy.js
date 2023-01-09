/// <reference types= "Cypress" />

describe('template spec', () => {

    let infoUser

    beforeEach(() => {
        cy.visit('/minha-conta/')
    })

    before(() => {
        cy.acess().then(res => {
            infoUser = res
        })
    })

    after(() => {
        cy.clearCookies()
    })

    it('Deve completar o pré cadastro com sucesso', () => {

        cy.cadastroUser(infoUser.uEmail, infoUser.uPass)

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(infoUser.uFirtName)
        cy.get('#account_last_name').type(infoUser.uLastName)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
})