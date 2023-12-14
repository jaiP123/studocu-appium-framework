const interact = require("../../src/utils/interact");
const verify = require("../../src/utils/verify");
const { isAndroid, isIOS } = require("../../src/utils/helper");


class BookDetailsScreen {

  /* LOCATORS*/

  get searchTitle() {
    if (isAndroid()) {
      return $('//*[@text="Connecting the Continents"]');
    } else if (isIOS) {
      return $('//XCUIElementTypeStaticText[@name="Connecting the Continents"]');
    }
  }

  get getBookRecord() {
    if (isAndroid()) {
      return $('//*[@content-desc="Connecting the Continents, Civil Aviation Authority, 2007"]'); // check xpath on android 
    } else if (isIOS) {
      return $('(//XCUIElementTypeOther[@name="Connecting the Continents Civil Aviation Authority 2007  "])[2]');
    }
  }

  get getAuthor() {
    if (isAndroid()) {
      return $('//*[@text="Civil Aviation Authority"]');
    } else if (isIOS) {
      return $('//XCUIElementTypeStaticText[contains(@name, "Civil Aviation Authority")]');
    }
  }

  get getSummary() {
    if (isAndroid()) {
      return $('//*[@text="Book Summary"]');
    } else if (isIOS) {
      return $('//XCUIElementTypeStaticText[@name="Book Summary"]');
    }
  }

  get currentlyReadingBtn() {
    if (isAndroid()) {
      return $('//*[@text="Currently Reading"]');
    } else if (isIOS) {
      return $('(//XCUIElementTypeOther[@name =" Currently Reading"])[1]');
    }
  }

  get goBackBtn() {
    if (isAndroid()) {
      return $('//*[@content-desc="Go back"]')
    } else if (isIOS) {
      return $('//XCUIElementTypeButton[@name="Go back"]');
    }
  }

  get getAddtoReading() {
    if (isAndroid()) {
      return $$('//*[contains(@content-desc, "")]')[1]; // Selecting the second element (index 1)
    } else if (isIOS) {
      return $('//XCUIElementTypeOther[@name=""]');
    }
  }

  get getWishlist() {
    if (isAndroid()) {
      //To do 
      //return $('(//*[@content-desc=""])[2]//preceding-sibling::android.view.ViewGroup');
      return $$('//*[contains(@content-desc, "")]')[2];
    } else if (isIOS) {
      return $('(//XCUIElementTypeOther[@name=" "])[2]//preceding-sibling::XCUIElementTypeOther[1]');
    }
  }


  /* PAGE OBJECT METHODS*/

  async openBook() {
    await verify.waitUntilDisplayed(this.getBookRecord, "book name field")
    await this.getBookRecord.click()
  }

  async getTitle() {
    await verify.waitUntilDisplayed(this.searchTitle, "Title field of Book")
  }

  async getAuthorBook(author) {
    await verify.waitUntilDisplayed(this.getAuthor, "Author field of book")
    await this.getAuthor.getText().then(text => {
      expect(text).toHaveText(author);
    })
  }

  async getBookSummary() {
    await verify.waitUntilDisplayed(this.getSummary, "Summary field")
  }

  async tapOnAddBookToCurrentlyReadingIcon() {
    await verify.waitUntilDisplayed(this.getAddtoReading, "Add book to currently reading icon")
    await this.getAddtoReading.click()
  }

  async addBookToWishlistAndRemove() {
    await verify.waitUntilDisplayed(this.getWishlist, "Add book to wishlist icon")
    await this.getWishlist.click()
    //await driver.saveScreenshot('screenshot_add_wishlist.png');
    await this.getWishlist.click()
    //await driver.saveScreenshot('screenshot_remove_wishlist.png');
  }

  async addBookToReadinglistAndRemove() {
    await verify.waitUntilDisplayed(this.getAddtoReading, "Add book to readinglist icon")
    await this.getAddtoReading.click()
    // await driver.saveScreenshot('screenshot_add_readinglist.png');
    await this.getAddtoReading.click()
    // await driver.saveScreenshot('screenshot_remove_readinglist.png');
  }

  async goToCurrentlyReadingScreen() {
    await verify.waitUntilDisplayed(this.currentlyReadingBtn, "Currently reading button icon")
    await interact.clickElement(this.currentlyReadingBtn, "Currently Reading Search Screen")
  }

  async clickGoBack() {
    await this.goBackBtn.click();
  }
}

module.exports = new BookDetailsScreen();


