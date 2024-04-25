const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'r9o9j1',
  reporter: 'cypress-mochawesome-reporter', //for html report

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      this.video = true;

      require('cypress-mochawesome-reporter/plugin')(on); //renable to generate report
    },
    env: {
      MAILDEV_PROTOCOL: "http",
      MAILDEV_HOST: "localhost",
      MAILDEV_SMTP_PORT: "1025",
      MAILDEV_API_PORT: "1080",
    }
  }
});


// module.exports = defineConfig({
//   env: {
//     MAILDEV_PROTOCOL: "http",
//     MAILDEV_HOST: "localhost",
//     MAILDEV_SMTP_PORT: "1025",
//     MAILDEV_API_PORT: "1080",
//   },
// });
