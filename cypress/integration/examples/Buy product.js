/// <reference types = "Cypress"/>
import ShopPage from "./PageObjects/AngularPractice/ShopPage"
import data from "../../fixtures/frameworkData.json"

describe('The user is able to complete purchase', function () {
    const shopPage = new ShopPage

    it('Buy 2 products', function () {
        cy.visit(Cypress.env('url') + '/angularpractice/shop')
            .url().should('contain', '/shop')

        data.productName.forEach((product) => {
            cy.addToCart(product)
        })

        shopPage.cart().click()
        cy.contains('Continue Shopping').should('have.length', 1)
        cy.contains('Checkout').should('have.length', 1)

        var sum = 0
        shopPage.productPrices().each(($el) => {
            sum += Number((($el.text().split(' '))[1]).trim())
        })

        shopPage.totalPrice().then((price)=>{
            const actualSum = ((price.text().split(' '))[1]).trim()
            expect(Number(actualSum)).to.equal(Number(sum))
        })
    })
})