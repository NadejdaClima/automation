class AutoPage {
    
    getCheckboxBlock() {
       return cy.get('#checkbox-example')
    }

    getAllCheckboxes() {
        return cy.get('input[type="checkbox"]')
    }

    getCheckbox(option) {
        cy.get('input[value="'+ option +'"]')
    }

}
export default AutoPage

