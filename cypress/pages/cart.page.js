class CartPage {
    elements = {
        checkoutButton: () => cy.get('#checkout'),
        cartItemRemoveButton: () => cy.get('.cart_item .btn'),
        cartItemTitle: () => cy.get('.inventory_item_name')
    }

    clickCheckoutButton() {
        this.elements.checkoutButton().click();
    }

    clickCartItemRemoveButton(index) {
        this.elements.cartItemRemoveButton().eq(index).click();
    }

    cartItemTitleText(index) {
        return this.elements.cartItemTitle().eq(index).invoke('text').then((text) => {
            return text;
        });
    }
}

module.exports = new CartPage()