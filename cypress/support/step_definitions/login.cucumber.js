import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor/"

import LoginPage from '../../pages/login.page';

Given('A user opens the login page', () => {
    LoginPage.navigate();
})

When('A user login with the username {string} and password {string}', (username, password) => {
    LoginPage.login(username, password);
})

When('A user clicks a login button', () => {
    LoginPage.clickLoginButton();
})

Then('A user is redirected to Inventory and logged in', () => {
    cy.url().should('contains', '/inventory.html')
})

Then('A user receives an error {string}', (message) => {
    LoginPage.elements.errorMessage().should('have.text', message)
})