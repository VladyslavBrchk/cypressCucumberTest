# Cypress-Cucumber-Test

This repo provides auto tests for [SauceDemo Website](https://www.saucedemo.com/) <br />
The test cases you can find on my [Google Drive](https://docs.google.com/spreadsheets/d/1w93gferarGutymJi5hzkLXe_xg34ljQPf-JRgsqm4WY/edit?usp=sharing)

## Dependencies Installation
To use these tests you should download this repo and install some dependencies by Powershell

* To create package.json file
```
npm init -y
```
* To install Cypress Framework
```
npm install cypress --save-dev      
```
* To install Cypress-Cucumber Preprocessor
```
npm install --save-dev  @badeball/cypress-cucumber-preprocessor
```
* To install Rimraf (to perform dir actions)
```
npm install rimraf --save-dev
```
* To install Cypress Mochawesome Reporter
```
npm install --save-dev cypress-mochawesome-reporter   
```
* To install faker (random generator)
```
npm install @faker-js/faker --save-dev
```
## Test Launch
There are some commands to launch test

* To launch tests via Cypress Tools
  - Write command in Powershell Terminal
  ```
  npm run test
  ```
  - Choose "E2E Testing"
  - Choose Browser
  - Open Specs Menu
  - Run Test
It provides running tests, viewing runs, debugging etc
* To run tests on Chrome Browser in Fullscreen in Headed Mode
```
npm run test-chrome-fullscreen
```
* To run tests on Edge Browser in Mobile Version in Headed Mode
```
npm run test-edge-mobile
```
* To run tests and create html-report in Headless Mode (the result will be in the cypress/report/ directory)
```
npm run test-n-report
```
## Viewing Previous Runs
* Workflow is set up so that the tests run every time someone pushes the repo
* The result of tests deploys on my [Github Pages](https://vladyslavbrchk.github.io/cypressCucumberTest/)