const interact = require("../../src/utils/interact");
const verify = require("../../src/utils/verify");
const { isAndroid, isIOS } = require('../../src/utils/helper');

//ES6 moul support to use import
class SearchScreen {

  /* LOCATORS*/


  get searchField() {
    if (isAndroid()) {
      return $('//*[@text="Search"]');
    } else if (isIOS()) {
      return $('//XCUIElementTypeOther[@name="Search"]')
    }
  }

  get getEditText() {
    if (isAndroid()) {
      return $('//android.widget.EditText');
    } else if (isIOS) {
      return $('//XCUIElementTypeTextField');
    }
  }

  get searchIcon() {
    if (isAndroid()) {
      return $('//*[@content-desc=""]');
    } else if (isIOS) {
      return $('(//XCUIElementTypeOther[@name=""])[12]');
    }
  }

  get currentlyReadingBtn() {
    if (isAndroid()) {
      return $('//*[@text="Currently Reading"]');
    } else if (isIOS) {
      return $('(//XCUIElementTypeOther[@name=" Currently Reading"])[1]');
    }
  }



  /* PAGE OBJECT METHODS*/

  async searchBook(bookname) {
    await verify.waitUntilDisplayed(this.getEditText, "Search edit field")
    await interact.clearValue(this.getEditText)
    await verify.waitUntilDisplayed(this.searchField, "Search edit field")
    await this.searchField.click()
    await this.searchField.setValue(bookname)
  }

  async clickSearch() {
    await verify.waitUntilDisplayed(this.searchIcon, "Search icon image")
    await this.searchIcon.click();
  }

  async clickSearchCR() {
    await verify.waitUntilDisplayed(this.currentlyReadingBtn, "Currently reading button")
    await this.currentlyReadingBtn.click();
  }

  async goToCurrentlyReadingScreen() {
    await verify.toBeDisplayed(this.currentlyReadingBtn)
    await interact.clickElement(this.currentlyReadingBtn, "Currently Reading Search Screen")
  }

}

module.exports = new SearchScreen();


