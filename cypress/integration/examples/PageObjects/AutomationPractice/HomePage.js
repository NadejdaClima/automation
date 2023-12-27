class HomePage {
    
    getCheckboxBlock() {
       return cy.get('#checkbox-example')
    }

    getAllCheckboxes() {
        return cy.get('input[type="checkbox"]')
    }

    getCheckbox1() {
        return cy.get('input[value="option1"]')
    }

    getDropDown() {
        return cy.get('select#dropdown-class-example')
    }

    getDynamicDropDown() {
        return cy.get('#autocomplete')
    }

    getAllAutocomplete() {
        return cy.get('li.ui-menu-item div')
    }

    getAlertButton() {
        return cy.get('#alertbtn')
    }

    getConfirmButton() {
        return cy.get('#confirmbtn')
    }

    getNewTabButton() {
        return cy.get('#opentab')
    }

    getTableColumn2() {
        return cy.get('tr td:nth-child(2)')
    }

    getHover() {
        return cy.get('div.mouse-hover-content')
    }

}
export default HomePage

