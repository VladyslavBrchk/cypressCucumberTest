const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    pageLoadTimeout: 20000,
    specPattern: 'cypress/e2e/features/*.feature',
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    browser: 'edge',
    viewportWidth: 375,
    viewportHeight: 667,
  },
});