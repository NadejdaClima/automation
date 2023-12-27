/// <reference types = "Cypress"/>

describe("Proceed to checkout", function() {
    it("The user is able to place an order", function() {
        cy.visit(Cypress.env('url') + 'seleniumPractise/')
        cy.get('.search-keyword').type('Cauliflower')
        cy.get('.products .product').contains('ADD TO CART').click()

        cy.get('div.cart-info table tbody').find('tr').eq(0)
        .find('td strong').should('have.text', '1')

        cy.get('a.cart-icon img').click().then(function() {
            cy.get('div.cart-preview').contains('CHECKOUT').click()
        })

        cy.contains('Place Order').click()

        cy.url().should('contain', '/country')
    })
})