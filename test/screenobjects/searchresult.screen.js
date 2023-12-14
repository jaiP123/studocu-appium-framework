const interact = require("../../src/utils/interact");
const verify = require("../../src/utils/verify");
const { isAndroid, isIOS } = require("../../src/utils/helper");


class SearchResultScreen {

  /* LOCATORS*/

  get searchresultLabel() {
    if (isAndroid()) {
      return $('//*[contains(@text, "Total search results")]')
    } else if (isIOS) {
      return $('//XCUIElementTypeStaticText[@name="Total search results: 100"]');
    }
  }

  get goBackBtn() {
    if (isAndroid()) {
      return $('//*[@content-desc="Go back"]')
    } else if (isIOS) {
      return $('//XCUIElementTypeButton[@name="Go back"]');
    }
  }

  get currentlyReadingBtn() {
    if (isAndroid()) {
      return $('//*[@text="Currently Reading"]');
    } else if (isIOS) {
      return $('(//XCUIElementTypeOther[@name=" Currently Reading"])[1]');
    }
  }

  get getTitle() {
    if (isAndroid()) {
      return $('//*[@text="Connecting the Continents"]');
    } else if (isIOS) {
      return $('(//XCUIElementTypeOther[@name="Connecting the Continents Civil Aviation Authority 2007  "])[2]');
    }
  }



  /* PAGE OBJECT METHODS*/

  async getResultCount(bookscount) {
    await verify.waitUntilDisplayed(this.searchresultLabel, "Search result label ")
    await this.searchresultLabel.getText().then(text => {
      expect(text).toHaveText(bookscount);
    })
  }

  async getResultTitle() {
    await verify.waitUntilDisplayed(this.getTitle, "Search result title label ")
  }

  async clickGoBack() {
    await this.goBackBtn.click();
  }

  async clickSearchCR() {
    await this.currentlyReadingBtn.click();
  }

  async goToCurrentlyReadingScreen() {
    await verify.toBeDisplayed(this.currentlyReadingBtn)
    await interact.clickElement(this.currentlyReadingBtn, "Currently Reading Search Screen")
  }

}

module.exports = new SearchResultScreen();


