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

    shopBtn() {
        return cy.contains('Shop')
    }
}
export default HomePage