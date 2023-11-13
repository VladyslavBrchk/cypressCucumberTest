import { When, Then } from "@badeball/cypress-cucumber-preprocessor/"

import CartPage from '../../pages/cart.page';

let cartItemTitle;

When('A user clicks a {string} button on Cart Page', (button) => {
    switch (button) {
        case "checkout": CartPage.clickCheckoutButton();
            break;
    }
})

When('A user deletes {int} item in cart', (index) => {
    CartPage.cartItemTitleText(index-1).then((title) => {
        cartItemTitle = title;
    })
    CartPage.clickCartItemRemoveButton(index-1);
}) 

Then('Item should be deleted', () => {
    cy.wrap(cartItemTitle).then((title) => {
        cy.contains(title).should('not.exist');
    });
})