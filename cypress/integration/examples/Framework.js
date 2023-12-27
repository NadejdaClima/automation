///<reference types = "Cypress"/>

import data from '../../fixtures/frameworkData.json' //import JSON fixture
import HomePage from '../examples/PageObjects/AngularPractice/HomePage'


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
        //overriding cypress configuration for this spec only
        Cypress.config('defaultCommandTimeout', 6000)
        cy.contains('Shop').click().url().should('contain', '/shop')

        // changing the parameter starting with this step
        Cypress.config('defaultCommandTimeout', 5000)
        data.productName.forEach((product)=>{
            cy.addToCart(product)
        })
        //Assert that the product was added to cart
        homePage.cartInfo().should('include.text', '2')
    })

    //convert this ₹. 50000 to number:
    // var bruteNumber = '₹. 50000'
    // var price = bruteNumber.split(' ')// price[0] = "₹." price[1]="50000"
    // price = price[1].trim() //remove any redundant spaces

    // for each element in the  table find the correct price and add to sum variable
    // sum = sum+price

    //convert to number:
    // Number(price)

 })