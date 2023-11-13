import './commands';
import 'cypress-mochawesome-reporter/register';

beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
})