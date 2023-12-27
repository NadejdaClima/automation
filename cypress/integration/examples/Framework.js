///<reference types = "Cypress"/>

import data from '../../fixtures/frameworkData.json' //import JSON fixture

describe('Framework', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    })
    it('Test using fixtures', () => {
        

        cy.get('input[name="name"]:nth-child(2)').as('name')

        cy.get('@name').type(data.name)
        cy.get('select').select(data.sex)
        cy.get('input[name="name"].ng-untouched').should('have.value', data.name)
        cy.get('@name').should('have.attr', 'minlength', 2)

        // cy.get('input#inlineRadio3').should('have.attr', 'disabled')
        cy.get('input#inlineRadio3').should('be.disabled')
    })

    it.only('Using generic methods', () => {
        cy.contains('Shop').click().url().should('contain', '/shop')

        data.productName.forEach((product)=>{
            cy.addToCart(product)
        })
        //Assert that the product was added to cart
        cy.get('a.nav-link.btn').should('include.text', '2')
    })
 })