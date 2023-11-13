class CheckoutTwoPage {

    elements = {
        summarySubtotal: () => cy.get('.summary_subtotal_label'),
        finishButton: () => cy.get('#finish')
    }
    
    clickFinishButton(){
        this.elements.finishButton().click();
    }
}

module.exports = new CheckoutTwoPage()