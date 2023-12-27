/// <reference types="Cypress" />
import HomePage from "./PageObjects/AutomationPractice/HomePage"

describe("Spec to test checkboxes and drawdowns", function() {
    const homePage = new HomePage

    this.beforeEach(function() {
        cy.visit(Cypress.env('url') + 'AutomationPractice/')
    })

    it('Checkboxes are functional', function() {
        homePage.getCheckboxBlock().find('input').each(($el) => {
            cy.wrap($el).check()
        })
        homePage.getAllCheckboxes().each(($el) => {
            cy.wrap($el).should('be.checked')
        })
        homePage.getCheckbox1().uncheck()
        homePage.getAllCheckboxes().uncheck(['option2', 'option3'])
        homePage.getAllCheckboxes().should('not.be.checked')
    })

    it('Static Dropdowns are functional', function() {
        homePage.getDropDown().select('option2')
            .should('have.value', 'option2')
    })

    it('Dynamic dropdowns are functional', function() {
       homePage.getDynamicDropDown().type('mo')
       homePage.getAllAutocomplete().each(($el) => {
            if($el.text().toLowerCase().startsWith('moldova')) {
                cy.wrap($el).click()
                homePage.getDynamicDropDown().should('contain.value', 'Moldova')
            }
        })
    })

    it('Alerts and Confirm pop-ups are as expected', function() {
        homePage.getAlertButton().click()
        homePage.getConfirmButton().click()

        cy.on('window:alert', (str) => {
            expect(str).to.contain('share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('Switching to other windows and sites is working', function() {
        //removing the target attribute so that the page will open 
        // in the same window
        homePage.getNewTabButton().invoke('removeAttr', 'target').click()
        
        //making some actions on the new website 
        // (requires explicitly stating the new origin)
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('.navbar-nav').contains('About us').click()
            cy.get('.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ')
        })
    })

    it('working with tables', function() {
        homePage.getTableColumn2().each(($el, index) => {
            const text = $el.text()
            if(text.includes('Python')) {
                //or
                // homePage.getTableColumn2().eq(index).next().then((price) => {
                cy.wrap($el).next().then((price) => {
                    const priceValue = price.text()
                    expect(priceValue).to.equal('25')
                })
            }
        }) 
    })

    it('Handling flaky elements on the page(hover)', () => {

        homePage.getHover().invoke('show').contains('Reload').click()
        homePage.getHover().invoke('show').contains('Top').click()
            .url().should('include', '#top')
        homePage.getHover().contains('Reload').click({force:true}) //works on hidden/flaky elements
        homePage.getHover().contains('Top').click({force:true})
            .url().should('include', '#top')
    
    })

}) 