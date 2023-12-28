class ShopPage {
    
    cart() {
        return cy.get('a.nav-link.btn')
    }

    productPrices()  {
        return cy.get('tr td:has(strong):nth-child(4)')
    }

    totalPrice() {
        return cy.get('td:has(h3) strong')
    }
}
export default ShopPage