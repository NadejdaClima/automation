//cypress - Spec file = test case
//feature file = test suite
/// <reference types="Cypress" />

describe("Le primul feature file", function() {

    xit("Le primul test case", function()
    {
        cy.visit("https://facebook.com");
    })

    xit("Le al doilea test case", function()
    {
        cy.visit("https://google.com");
    })

    it("site-ul lui rahul shitty", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        // create alias
        cy.get('.products>.product').as('products')
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('@products').eq(0).contains('ADD TO CART').click()
        cy.get('@products')
        .each(($el, index, $list) => {
            const productName = $el.find('h4.product-name').text()
            if(productName.includes('Cashews')) {
                cy.wrap($el).find('button').click()
                .then(function(){
                    console.log('Clicked the Cashews ADD TO CART')
                })
            }
        })
        cy.get('.brand').should('include.text', 'KART')
        //text() is not cy function, so it needs to be manually resolved using then()
        cy.get('.brand').then(function(logo) {
            cy.log(logo.text() + ' is shitty')
        }
        )

        // cy.get(':nth-child(1) > :nth-child(3) > strong').should(have.value, '0')
    })
})