const LoginPage = require('./loginPage');

class TestHelpers {
  constructor(page) {
    this.page = page;
  }

  async performLogin(email, password) {
    const loginPage = new LoginPage(this.page);
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickLogin();
  }
}

module.exports = TestHelpers;
