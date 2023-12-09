const interact = require("../../src/utils/interact");
const verify = require("../../src/utils/verify");
const { isAndroid, isIOS } = require("../../src/utils/helper");


class SearchResultScreen {

  /* LOCATORS*/

  get searchresultLabel() {
    return $('//*[contains(@text, "Total search results")]')
  }

  get goBackBtn() {
    return $('//*[@content-desc="Go back"]')
  }

  get currentlyReadingBtn() {
    return $('//*[@text="Currently Reading"]');
  }

  get getTitle() {
    return $('//*[@text="The Lord of the Rings"]');
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


