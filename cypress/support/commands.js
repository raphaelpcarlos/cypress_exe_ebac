import { faker } from '@faker-js/faker';

Cypress.Commands.add('acess', () => {

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const pass = '!teste@123!'

    var infoUser = {
        uFirtName: firstName,
        uLastName:lastName,
        uEmail:email,
        uPass:pass
        
    }
    
    return infoUser
})

Cypress.Commands.add('cadastroUser', (email,pass) => {

    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(pass)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
      .should('contain', 'Olá')

})