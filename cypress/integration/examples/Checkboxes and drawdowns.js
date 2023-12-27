//cypress - Spec file = test case
//feature file = test suite
/// <reference types="Cypress" />
import AutoPage from "./PageObjects/AutoPage"

describe("Spec to test checkboxes and drawdowns", function() {
    const autoPage = new AutoPage

    this.beforeEach(function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it.only('Checkboxes are functional', function() {
        autoPage.getCheckboxBlock().find('input').each(($el) => {
            cy.wrap($el).check()
        })
        autoPage.getAllCheckboxes().each(($el) => {
            cy.wrap($el).should('be.checked')
        })
        cy.get('input[value="option1"]').uncheck()
        cy.get('input[type="checkbox"]').uncheck(['option2', 'option3'])
        cy.get('input[type="checkbox"]').should('not.be.checked')
    })

    it('Static Dropdowns are functional', function() {
        cy.get('select#dropdown-class-example').select('option2')
            .should('have.value', 'option2')
    })

    it('Dynamic dropdowns are functional', function() {
        cy.get('#autocomplete').type('mo').get('li.ui-menu-item div').each(($el) => {
            if($el.text().toLowerCase().startsWith('moldova')) {
                cy.wrap($el).click()
                cy.get('#autocomplete').should('contain.value', 'Moldova')
            }
        })
    })

    it('Alerts and Confirm pop-ups are as expected', function() {
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

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
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        
        //making some actions on the new website 
        // (requires explicitly stating the new origin)
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('.navbar-nav').contains('About us').click()
            cy.get('.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ')
        })
    })

    it('working with tables', function() {
        cy.get('tr td:nth-child(2)').each(($el, index) => {
            const text = $el.text()
            if(text.includes('Python')) {
                //or
                // cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                cy.wrap($el).next().then((price) => {
                    const priceValue = price.text()
                    expect(priceValue).to.equal('25')
                })
            }
        }) 
    })

    it('Handling flaky elements on the page(hover)', () => {
        cy.get('div.mouse-hover-content').as('hover')

        cy.get('@hover').invoke('show').contains('Reload').click()
        cy.get('@hover').invoke('show').contains('Top').click()
            .url().should('include', '#top')
        cy.get('@hover').contains('Reload').click({force:true}) //works on hidden/flaky elements
        cy.get('@hover').contains('Top').click({force:true})
            .url().should('include', '#top')
    
    })

}) 