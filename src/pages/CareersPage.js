import { BASE_URL } from '../TestData/config';
const locators = require('../pages/locators');


class CareersPage {
    constructor(page) {
      this.page = page;
      this.locators = locators.CareersPage;
    }

    async navigateToCareersPage() {
        try {
            await this.page.goto(`${BASE_URL}/careers`);
            
        } catch (error) {
          console.error(`Error navigating to career page: ${error.message}`);
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

      async close() {
        try {
          await this.page.close();
          console.log('Page closed successfully.');
        } catch (error) {
          console.error(`Error closing the page: ${error.message}`);
        }
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

      async isOpenPositionbtnVisible() {
        return this.isElementVisible(this.locators.openPositionsbtn);
      }

      async isheaderVisible() {
        return this.isElementVisible(this.locators.headerSelector);
      }

      async isfooterVisible() {
        return this.isElementVisible(this.locators.footerSelector);
      }

      async islogoVisible() {
        return this.isElementVisible(this.locators.logoSelector);
      }
      async clickopenPositionBtn() {
        try {
          await this.page.click(this.locators.openPositionsbtn);
          console.log('Clicked on Open Position Button.');
        } catch (error) {
          console.error(`Error clicking on Open position button: ${error.message}`);
          throw error;
        }
      }

      async isOpenPositionVisible() {
        return this.isElementVisible(this.locators.openpositions);
      }

      async isLearnMoreVisible() {
        return this.isElementVisible(this.locators.learnMore);
      }


      async isJobListingAvailable() {
        try {
          // Wait for the job listing to be visible
          await this.page.waitForSelector(this.locators.joblisting, { state: 'visible' });
    
          // Check if at least one job is present in the job listing
          const jobListingCount = await this.page.$$(this.locators.joblisting);
          
          if (jobListingCount.length > 0) {
            console.log('At least one job is available in the job listing.');
            const clickjobtitile = await this.page.$$(this.locators.jobopeningtitle);
            
            // Click the first job in the job listing
            const firstJob = clickjobtitile[0];
            await firstJob.click();
    
            console.log('Clicked on the first job in the job listing.');
            return true;
          } else {
            console.log('No jobs found in the job listing.');
            return false;
          }
        } catch (error) {
          console.error(`Error checking job listing: ${error.message}`);
          throw error;
        }
      }

      async clickApplyforPositionBtn() {
        try {
          await this.page.click(this.locators.applyforthisposition);
          console.log('Clicked on apply for Position Button.');
        } catch (error) {
          console.error(`Error clicking on Apply for position button: ${error.message}`);
          throw error;
        }
      }
      async isApplyforthisPositionVisible() {
        return this.isElementVisible(this.locators.applyforthisposition);
      }
      async getTitle() {
        try {
          return await this.page.title();
        } catch (error) {
          console.error(`Error getting page title: ${error.message}`);
          throw error;
        }
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

module.exports =CareersPage;