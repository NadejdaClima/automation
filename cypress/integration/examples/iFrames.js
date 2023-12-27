/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('iframes are functional', function() {
    it('Verify that the user can navigate through the iFrame', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //switch to iFrame
        cy.frameLoaded('#courses-iframe')
        //navigate though the iFrame
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(400) //without this waiter the next step will fail
        cy.iframe().find('div.pricing-header').should('have.length', 2)
    })
})
