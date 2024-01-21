const { test, expect } = require('@playwright/test');
const CareersPage = require('../pages/CareersPage');
const fixture = require('../fixture/Fixture');
const assertionMessages = require('../TestData/assertionMessages');


const setupCareersPage = (page) => new CareersPage(page);

let careerPage;

fixture.context.beforeEach(async ({ page }) => {
  careerPage = setupCareersPage(page);
  await careerPage.navigateToCareersPage();
});

fixture.context.afterEach(async () => {
  await careerPage.close();
});

test.describe('Careers Page Tests ', () => {
  // Test Case 1: Page Navigation
  test('User can access the careers page and verify the URL @critical', async () => {
    const title = await careerPage.getTitle();
    expect(title).toMatch(assertionMessages.expectedTitlecareer);
  });

  // Test Case 2: Page Content
  test('Careers page contains relevant information @high', async () => {
    await careerPage.clickopenPositionBtn();
    expect(await careerPage.isOpenPositionVisible()).toBe(true);
  });

  // Test Case 3: Job Listings
  test('Job listings are displayed correctly with valid "Apply for this position and Learn More" buttons if there is any open position @high', async () => {
    
    await careerPage.clickopenPositionBtn();
    await careerPage.isJobListingAvailable();
    expect(await careerPage.isLearnMoreVisible()).toBe(true);
    expect(await careerPage.isApplyforthisPositionVisible()).toBe(true);
    await careerPage.clickApplyforPositionBtn();
    const currentURL = await careerPage.getCurrentURL();
    expect(currentURL).toBe(assertionMessages.VerifyApplyjoburl);
  });

  // Test Case 4: Header, Footer, and Logo Visibility Test
  test('Header, Footer, and Logo are visible on the Careers page @low', async () => {
    // Assert Header Visibility
    const isHeaderVisible = await careerPage.isheaderVisible();
    expect(isHeaderVisible).toBe(true, 'Header is visible');

    // Assert Footer Visibility
    const isFooterVisible = await careerPage.isfooterVisible();
    expect(isFooterVisible).toBe(true, 'Footer is visible');

    // Assert Logo Visibility
    const isLogoVisible = await careerPage.islogoVisible();
    expect(isLogoVisible).toBe(true, 'Logo is visible');
  });

  test.fixme('User can filter job listings based on Role', async () => {
    // This test case needs to be implemented to verify if the user can successfully
    // filter job listings based on the role on the Careers page.
});

test.fixme('After clicking the "Apply for this position" button, the user should navigate to the correct page', async () => {
    // This test case needs to be implemented to verify if the user is correctly navigated
    // to the appropriate page after clicking the "Apply for this position" button.
});

test.fixme('We can verify the CSS properties for the buttons', async () => {
    // This test case needs to be implemented to verify the CSS properties for buttons
    // on the Careers page.
});

test.fixme('We can implement the test case using an API as well', async () => {
    // This test case needs to be implemented to verify specific behavior using an API.
    // For example, validating data consistency between UI and API responses.
});

});
