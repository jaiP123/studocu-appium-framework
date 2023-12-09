const interact = require("../../src/utils/interact");
const verify = require("../../src/utils/verify");
const { isAndroid, isIOS } = require("../../src/utils/helper");


class BookDetailsScreen {

  /* LOCATORS*/ßß

  /* get searchField() {
   if(isAndroid){
     console.log("inside isAndoid ")
     return $('//*[@text="Search"]');
   }else if(isIOS){
     return $(`~mobile.login.get-user-identifier.user-input.placeholder.phoneNumber`);
   }
 } */

  get searchTitle() {
    return $('//*[@text="The Lord of the Rings"]');
  }

  get getBookRecord() {
    return $('//*[@content-desc="The Lord of the Rings, J.R.R. Tolkien, 2019"]');
  }

  get getAuthor() {
    return $('//*[@text="J.R.R. Tolkien"]');
  }

  get getSummary() {
    return $('//*[@text="Book Summary"]');
  }

  get currentlyReadingBtn() {
    return $('//*[@text="Currently Reading"]');
  }

  get goBackBtn() {
    return $('//*[@content-desc="Go back"]')
  }

  get getAddtoReading() {
    return $$('//*[contains(@content-desc, "")]')[1]; // Selecting the second element (index 1)
  }

  get getWishlist() {
    return $$('//*[@content-desc=""]')[0];
  }


  /* PAGE OBJECT METHODS*/

  /* get searchField() {
   if(isAndroid){
     console.log("inside isAndoid ")
     return $('//*[@text="Search"]');
   }else if(isIOS){
     return $('//*[@text="Search"]');
   }
 } */


  async openBook() {
    await verify.waitUntilDisplayed(this.getBookRecord, "book name field")
    await this.getBookRecord.click()
  }

  async getTitle() {
    await verify.waitUntilDisplayed(this.searchTitle, "Title field of Book")
  }

  async getAuthorBook() {
    await verify.waitUntilDisplayed(this.getAuthor, "Author field of book")
  }

  async getBookSummary() {
    await verify.waitUntilDisplayed(this.getSummary, "Summary field")
  }

  async addBookToCurrentlyReading() {
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


