const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  env: {
    url: 'https://rahulshettyacademy.com'
  },
  retries: {
    //if the test fails, it will be run 1 more time
    runMode: 1
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
  },
});
