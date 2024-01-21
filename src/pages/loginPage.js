const locators = require('../pages/locators');
import { BASE_URL } from '../TestData/config';



class loginPage {
  constructor(page) {
    this.page = page;
    this.locators = locators.LoginPage;
  }

  async navigateToHomePageAndClickLogin() {
    try {
      await this.page.goto(BASE_URL);
      await this.page.click(this.locators.LogIn);
    } catch (error) {
      console.error(`Error navigating to home page and clicking login: ${error.message}`);
      throw error;
    }
  }

  async close() {
    try {
      await this.page.close();
      console.log('Page closed successfully.');
    } catch (error) {
      console.error(`Error closing the page: ${error.message}`);
    }
  }

  async enterEmail(email) {
    try {
      await this.page.fill(this.locators.emailInput, email);
      console.log(`Entered email: ${email}`);
    } catch (error) {
      console.error(`Error entering email: ${error.message}`);
      throw error;
    }
  }

  async enterPassword(password) {
    try {
      await this.page.fill(this.locators.passwordInput, password);
      console.log('Entered password.');
    } catch (error) {
      console.error(`Error entering password: ${error.message}`);
      throw error;
    }
  }

  async clickLogin() {
    try {
      await this.page.click(this.locators.loginButton);
      console.log('Clicked on the login button.');
    } catch (error) {
      console.error(`Error clicking login button: ${error.message}`);
      throw error;
    }
  }

  async clickForgotPasswordLink() {
    try {
      await this.page.click(this.locators.forgotPassword);
      console.log('Clicked on forgot password link.');
    } catch (error) {
      console.error(`Error clicking forgot password link: ${error.message}`);
      throw error;
    }
  }

  async clickAlreadyHaveAnAccLink() {
    try {
      await this.page.click(this.locators.alreadyhaveanaccount);
      console.log('Clicked on already have an account link.');
    } catch (error) {
      console.error(`Error clicking already have an account link: ${error.message}`);
      throw error;
    }
  }

  async clickEmailLink() {
    try {
      await this.page.click(this.locators.emailLink);
      console.log('Clicked on email link.');
    } catch (error) {
      console.error(`Error clicking email link: ${error.message}`);
      throw error;
    }
  }

  async getTitle() {
    try {
      return await this.page.title();
    } catch (error) {
      console.error(`Error getting page title: ${error.message}`);
      throw error;
    }
  }

  async getContent(locator) {
    try {
      return await this.page.textContent(locator);
    } catch (error) {
      console.error(`Error retrieving text content: ${error.message}`);
      throw error;
    }
  }

  async invalidLoginText() {
    return this.getContent(this.locators.invalidLogin);
  }

  async invalidEmailText() {
    return this.getContent(this.locators.invalidEmail);
  }

  async notAValidEmailText() {
    return this.getContent(this.locators.NotaValidEmail);
  }

  async forgotPasswordConfirmationText() {
    return this.getContent(this.locators.forgotPassConfirmation);
  }

  async isElementVisible(selector) {
    try {
      await this.page.waitForSelector(selector, { state: 'visible' });
      return true;
    } catch (error) {
      console.error(`Error checking if the element is visible: ${error.message}`);
      return false;
    }
  }

  async isEmailLinkVisible() {
    return this.isElementVisible(this.locators.emailLink);
  }

  async isLoginLinkVisible() {
    return this.isElementVisible(this.locators.loginButton);
  }

  async getCurrentURL() {
    try {
      const currentUrl = await this.page.url();
      return currentUrl;
    } catch (error) {
      console.error(`Error checking for URL: ${error.message}`);
      return false;
    }
  }
}

module.exports = loginPage;