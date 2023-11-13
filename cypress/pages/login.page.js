class LoginPage {

    elements = {
        usernameInput: () => cy.get('input#user-name'),
        passwordInput: () => cy.get('input#password'),
        loginButton: () => cy.get('input#login-button'),
        errorMessage: () => cy.get('.error-message-container')
    }

    navigate() {
        cy.visit('/');
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }

    login(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.clickLoginButton();
    }
}

module.exports = new LoginPage()