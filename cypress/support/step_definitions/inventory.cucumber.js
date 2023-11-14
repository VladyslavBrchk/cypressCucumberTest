import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor/"

import LoginPage from '../../pages/login.page';
import InventoryPage from '../../pages/inventory.page';
import CartPage from '../../pages/cart.page';
import CheckoutTwoPage from "../../pages/checkoutTwo.page";

const validData = require('../../fixtures/validData.json');
const validURL = require('../../fixtures/validURL.json');
let addedItemTitle;
let addedItemPrice;

Given('A user is logged in', () => {
    LoginPage.navigate();
    LoginPage.login(validData.username, validData.password);
})

When('A user clicks a {string} button on Inventory Page', (button) => {
    switch (button) {
        case "logout": InventoryPage.clickLogoutButton();
            break;
        case "burger menu": InventoryPage.clickInventoryBurger();
            break;
        case "filter menu": InventoryPage.clickFilterButton();
            break;
        case "cart": InventoryPage.clickCartButton();
            break;
        case "Twitter Link": InventoryPage.clickTwitterLink();
            break;
        case "Facebook Link": InventoryPage.clickFacebookLink();
            break;
        case "LinkedIn Link": InventoryPage.clickLinkedInLink();
            break;
    }
})

When('A user adds {int} item in inventory to cart', (index) => {
    InventoryPage.addInventoryItem(index - 1);
    InventoryPage.inventoryItemPrice(index - 1).then((price) => {
        addedItemPrice = price;
    })
    InventoryPage.inventoryItemTitle(index - 1).then((title) => {
        addedItemTitle = title;
    })
})

When('A user deletes {int} item in inventory from cart', (index) => {
    InventoryPage.inventoryItemAddButtonText(index - 1).should('eq', 'Remove');
    InventoryPage.addInventoryItem(index - 1);
})

Then('A user is redirected to {string}', (page) => {
    switch (page) {
        case "Login Page": cy.url().should('eq', validURL.loginPage);
            break;
        case "Inventory Page": cy.url().should('eq', validURL.inventoryPage);
            break;
        case "Twitter Page": cy.url().should('eq', validURL.twitterPage);
            break;
        case "Facebook Page": cy.url().should('eq', validURL.facebookPage);
            break;
        case "LinkedIn Page": cy.url().should('eq', validURL.linkedInPage);
            break;
        case "Checkout Complete Page": cy.url().should('eq', validURL.checkoutCompletePage);
            break;
        case "Overview Page": cy.url().should('eq', validURL.overviewPage);
            break;

    }
})

Then('A user see {int} menu items', (value) => {
    InventoryPage.navigationMenuLength().should('eq', value);
})

Then('A user see {string} near cart button', (value) => {
    if (value == 'nothing') {
        InventoryPage.cartBadge().should('be.NaN');
    }
    else {
        InventoryPage.cartBadge().should('eq', parseInt(value));
    }
})

Then('The button near {int} item in inventory changed into {string}', (index, text) => {
    InventoryPage.inventoryItemAddButtonText(index - 1).should('eq', text);
})

Then('A user see added element in a cart', () => {
    CartPage.cartItemTitleText(0).then((title) => {
        cy.wrap(addedItemTitle).should('eq', title)
    })
})

Then('A total sum in checkout is valid', () => {
    cy.wrap(addedItemPrice).then((price) => {
        CheckoutTwoPage.elements.summarySubtotal().invoke('text').should('include', price)
    })   
})