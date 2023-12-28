///<reference types = "Cypress"/>

import data from '../../fixtures/frameworkData.json' //import JSON fixture
import HomePage from '../examples/PageObjects/AngularPractice/HomePage'
import ShopPage from './PageObjects/AngularPractice/ShopPage'


describe('Framework', () => {
    const homePage = new HomePage

    beforeEach(() => {
        cy.visit(Cypress.env('url') + '/angularpractice/')
    })
    it('Test using fixtures', () => {
        

        homePage.name().as('name')

        homePage.name().type(data.name)
        homePage.genderDropdown().select(data.sex)
        homePage.dataBinderField().should('have.value', data.name)
        homePage.name().should('have.attr', 'minlength', 2)

        // homePage.entrepreneurCheck().should('have.attr', 'disabled')
        homePage.entrepreneurCheck().should('be.disabled')
    })

    it('Using generic methods', () => {
        const shopPage = new ShopPage
        //overriding cypress configuration for this spec only
        Cypress.config('defaultCommandTimeout', 6000)
        homePage.shopBtn().click().url().should('contain', '/shop')

        // changing the parameter starting with this step
        Cypress.config('defaultCommandTimeout', 5000)
        data.productName.forEach((product)=>{
            cy.addToCart(product)
        })
        //Assert that the product was added to cart
        shopPage.cart().should('include.text', '2')
    })
 })