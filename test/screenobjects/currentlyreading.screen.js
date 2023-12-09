const interact = require("../../src/utils/interact");
const verify = require("../../src/utils/verify");
const { isAndroid, isIOS } = require("../../src/utils/helper");


class CurrentlyReadingScreen {

  get getBookTitle() {
    return $('//*[@text="The Lord of the Rings"]');
  }

  get currentlyReadingBtn() {
    return $('//*[@text="Currently Reading"]');
  }

  get goBackBtn() {
    return $('//*[@content-desc="Go back"]')
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


