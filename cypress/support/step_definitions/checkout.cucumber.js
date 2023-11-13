import { When, Then } from "@badeball/cypress-cucumber-preprocessor/"

import CheckoutOnePage from '../../pages/checkoutOne.page';
import CheckoutTwoPage from '../../pages/checkoutTwo.page';
import CheckoutCompletePage from "../../pages/checkoutComplete.page";
import InventoryPage from "../../pages/inventory.page";
import CartPage from "../../pages/cart.page";

When('A user fill checkout form with {string}, {string} and {string}', (firstName, lastName, postalCode) => {
    CheckoutOnePage.fillCheckout(firstName, lastName, postalCode);
})

When('A user clicks a {string} button on Checkout Page', (button) => {
    switch (button) {
        case "continue": CheckoutOnePage.clickContinueButton();
            break;
        case "finish": CheckoutTwoPage.clickFinishButton();
            break;
    }
}) 

When('A user complete checkout with {string}, {string} and {string}', (firstName, lastName, postalCode) => {
    InventoryPage.clickCartButton();
    CartPage.clickCheckoutButton();
    CheckoutOnePage.fillCheckout(firstName, lastName, postalCode);
    CheckoutOnePage.clickContinueButton();
}) 

Then('A user receives {string} message', (message) => {
    CheckoutCompletePage.elements.completeMsg().should('have.text', message)
})