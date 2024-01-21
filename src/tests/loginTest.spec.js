const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const fixture = require('../fixture/Fixture');
const TestHelpers = require('../pages/TestHelpers');
const testData = require('../TestData/testdata.json');
const assertionMessages = require('../TestData/assertionMessages');



const setupLoginPage = (page) => new LoginPage(page);
const setupTestHelpers = (page) => new TestHelpers(page);

let loginPage;
let testHelpers;

fixture.context.beforeEach(async ({ page }) => {
  loginPage = setupLoginPage(page);
  testHelpers = setupTestHelpers(page);
  await loginPage.navigateToHomePageAndClickLogin();
});

fixture.context.afterEach(async () => {
  await loginPage.close();
});

test.describe('Login Tests', () => {
  test('User can login successfully with valid credentials @Critical', async () => {
    const { email, password } = testData.validCredentials;
    await testHelpers.performLogin(email, password);
    const title = await loginPage.getTitle();
    expect(title).toMatch(assertionMessages.expectedTitle);
  });

  test('User cannot login with Invalid Email @high', async () => {
    const { invalidEmail, Password } = testData.incorrectEmail;
    await testHelpers.performLogin(invalidEmail, Password);
    const InvalidErrorMsg = await loginPage.notAValidEmailText();
    expect(InvalidErrorMsg).toMatch(assertionMessages.InvalidEmailError);
  });

  test('User cannot login with incorrect password @high', async () => {
    const { email, incorrectPassword } = testData.invalidCredentials;
    await testHelpers.performLogin(email, incorrectPassword);
    const InvalidErrorMsg = await loginPage.invalidLoginText();
    expect(InvalidErrorMsg).toMatch(assertionMessages.invalidLogin);
  });

  test('User cannot login with empty email and password @Medium', async () => {
    const { email, password } = testData.emptyCredentials;
    await testHelpers.performLogin(email, password);
    const InvalidEmailErrorMsg = await loginPage.invalidEmailText();
    expect(InvalidEmailErrorMsg).toContain(assertionMessages.emailIsRequired);
  });
});

test.describe('Navigation Tests', () => {
  test('User can navigate to the Forgot Password page @Medium', async () => {
    await loginPage.clickForgotPasswordLink();
    expect(await loginPage.isEmailLinkVisible()).toBe(true);
    const currentURL = await loginPage.getCurrentURL();
    expect(currentURL).toBe(assertionMessages.VerifyURLForgotPassword);
  });

  test('User can navigate to the "Already have an account?" page @Medium', async () => {
    await loginPage.clickForgotPasswordLink();
    await loginPage.clickAlreadyHaveAnAccLink();
    expect(await loginPage.isLoginLinkVisible()).toBe(true);
    const currentURL = await loginPage.getCurrentURL();
    expect(currentURL).toBe(assertionMessages.VerifyLoginURL);
  });

  test('User Navigate to Forgot Password and can click on an email link @Medium', async () => {
    await loginPage.clickForgotPasswordLink();
    const { email } = testData.validCredentials;
    await loginPage.enterEmail(email);
    await loginPage.clickEmailLink();
    const ForgotPassConfirmation = await loginPage.forgotPasswordConfirmationText();
    expect(ForgotPassConfirmation).toMatch(assertionMessages.ResetPassword);
    const currentURL = await loginPage.getCurrentURL();
    expect(currentURL).toBe(assertionMessages.VerifyURLForgotPassword);
  });
});

test.describe('Cookies Tests @critical', () => {
  // New test case for handling cookies after successful login
  test('User receives a session cookie after successful login', async ({ page }) => {
    const { email, password } = testData.validCredentials;
    const testHelpers = setupTestHelpers(page);
    await testHelpers.performLogin(email, password);

    // Check if the session cookie is set
    const cookies = await page.context().cookies();
    const sessionCookie = cookies.find(cookie => cookie.name === 'Mitigram.StickySession');
    expect(sessionCookie).toBeDefined();
  });



  test.fixme('User should receive a email after click on email link', async () => {
  });
  
  test.fixme('User should see a validation message for invalid characters in the password field', async () => {
    
  });
  
});
