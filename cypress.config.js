const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeOut: 8000,
  env: {
    url: 'https://www.jumia.com.ng',
  },
  projectId: 'tqivwc',
  reporter: 'mochawesome',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
