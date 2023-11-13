class CheckoutOnePage {

    elements = {
        firstNameInput: () => cy.get('input#first-name'),
        lastNameInput: () => cy.get('input#last-name'),
        postalCodeInput: () => cy.get('input#postal-code'),
        continueButton: () => cy.get('#continue')
    }

    fillCheckout(firstName, lastName, postalCode) {
        this.elements.firstNameInput().type(firstName);
        this.elements.lastNameInput().type(lastName);
        this.elements.postalCodeInput().type(postalCode);        
    }

    clickContinueButton() {
        this.elements.continueButton().click();
    }
}

module.exports = new CheckoutOnePage()