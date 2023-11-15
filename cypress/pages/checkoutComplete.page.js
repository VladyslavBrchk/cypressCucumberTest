class CheckoutCompletePage {
    elements = {
        completeMsg: () => cy.get('.complete-header')
    }    
}

module.exports = new CheckoutCompletePage()