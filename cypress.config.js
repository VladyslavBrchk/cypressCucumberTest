const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  require('cypress-mochawesome-reporter/plugin')(on);
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
    video: false,
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Inline Reporter',
      embeddedScreenshots: true,
      inlineAssets: true,
      reportDir: "cypress/report",
    },

  e2e: {
    setupNodeEvents,
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    pageLoadTimeout: 20000,
    specPattern: 'cypress/e2e/features/*.feature',
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
  }
});