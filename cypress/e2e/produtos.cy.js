/// <reference types= 'Cypress' />


describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    after(() => {
        cy.clearCookies() // Clear cookies for the currrent domain
    })

    it('Deve selecionar um produtos', () => {

        cy.get('[class="product-block grid"]')
            .contains('Aether Gym Pant')
            .click()
    })

    it.only('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 3
        var produto = 'Abominable Hoodie'

        cy.get('[class="product-block grid"]')
            .contains(produto)
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain', quantidade)

        cy.get('.woocommerce-message')
            .should('contain', `${quantidade} × “${produto}” foram adicionados no seu carrinho.`)

    })
})