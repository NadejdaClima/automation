class HomePage {
    name() {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    genderDropdown() {
        return cy.get('select')
    }
    dataBinderField() {
        return cy.get('input[name="name"].ng-untouched')
    }
    entrepreneurCheck() {
        return cy.get('input#inlineRadio3')
    }
    cartInfo() {
        return cy.get('a.nav-link.btn')
    }
}
export default HomePage