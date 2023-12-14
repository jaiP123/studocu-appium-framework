const interact = require("../../src/utils/interact");
const verify = require("../../src/utils/verify");
const { isAndroid, isIOS } = require("../../src/utils/helper");


class CurrentlyReadingScreen {

  get getBookTitle() {
    if (isAndroid()) {
      return $('//*[@text="Connecting the Continents"]');
    } else if (isIOS) {
      return $('//XCUIElementTypeStaticText[@name="Connecting the Continents"]');
    }
  }

  get currentlyReadingBtn() {
    if (isAndroid()) {
      return $('//*[@text="Currently Reading"]');
    } else if (isIOS) {
      return $('(//XCUIElementTypeOther[@name=" Currently Reading”])[5]');
    }
  }

  get goBackBtn() {
    if (isAndroid()) {
      return $('//*[@content-desc="Go back"]')
    } else if (isIOS) {
      return $('//XCUIElementTypeButton[@name="Go back"]');
    }
  }


  /* PAGE OBJECT METHODS*/

  async clickSearch() {
    await this.searchField.keys('Enter');
  }

  async getTitle() {
    await verify.waitUntilDisplayed(this.getBookTitle, "Title field of Book")
  }

  async clickGoBack() {
    await this.goBackBtn.click();
  }
}

module.exports = new CurrentlyReadingScreen();


