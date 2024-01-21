const { test } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const CareersPage = require('../pages/CareersPage');

class Fixture {
  // Fixture for setting up the browser context
  context = test.extend({
    // Setup browser context
    setup: async () => {
      const browserContext = await global.browser.newContext();
      const contextData = { browserContext };
      return contextData;
    },
  });

  // Fixture for setting up the page
  page = this.context.extend({
    // Setup page
    setup: async ({ context }, use) => {
      const page = await context.browserContext.newPage();
      const pageData = { page };
      await use(pageData);
    },
  });

  // Fixture for setting up the LoginPage
  loginPage = this.page.extend({
    // Setup login page
    setup: async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await use(loginPage);
    },
  });

  // Fixture for setting up the CareersPage
  careersPage = this.page.extend({
    // Setup careers page
    setup: async ({ page }, use) => {
      const careersPage = new CareersPage(page);
      await use(careersPage);
    },
  });
}

module.exports = new Fixture();