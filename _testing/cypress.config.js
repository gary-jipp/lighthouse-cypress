const {defineConfig} = require("cypress");

module.exports = defineConfig({
  video: true,
  viewportWidth: 1024,
  viewportHeight: 800,

  e2e: {
    baseUrl: "https://google.ca",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
