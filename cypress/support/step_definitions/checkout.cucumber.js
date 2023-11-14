import { When, Then } from "@badeball/cypress-cucumber-preprocessor/"

import CheckoutOnePage from '../../pages/checkoutOne.page';
import CheckoutTwoPage from '../../pages/checkoutTwo.page';
import CheckoutCompletePage from "../../pages/checkoutComplete.page";
import InventoryPage from "../../pages/inventory.page";
import CartPage from "../../pages/cart.page";

import { faker } from '@faker-js/faker';

let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let postalCode = faker.datatype.number({ min: 10000, max: 99999});

When('A user fill checkout form with random credentials', () => {
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

When('A user complete checkout with random credentials', () => {
    InventoryPage.clickCartButton();
    CartPage.clickCheckoutButton();
    CheckoutOnePage.fillCheckout(firstName, lastName, postalCode);
    CheckoutOnePage.clickContinueButton();
}) 

Then('A user receives {string} message', (message) => {
    CheckoutCompletePage.elements.completeMsg().should('have.text', message)
})