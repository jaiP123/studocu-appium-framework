const interact = require("../../src/utils/interact");
const verify = require("../../src/utils/verify");
const { isAndroid, isIOS } = require("../../src/utils/helper");


class SearchScreen {

  /* LOCATORS*/

  /* get searchField() {
   if(isAndroid){
     console.log("inside isAndoid ")
     return $('//*[@text="Search"]');
   }else if(isIOS){
     return $(``);
   }
 } */

  get searchField() {
    return $('//*[@text="Search"]');
  }

  get getEditText() {
    return $('//android.widget.EditText');
  }

  get searchIcon() {
    return $('//*[@content-desc=""]');
  }

  get currentlyReadingBtn() {
    return $('//*[@text="Currently Reading"]');
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

  async searchBook(bookname) {
    await verify.waitUntilDisplayed(this.getEditText, "Search edit field")
    await interact.clearValue(this.getEditText)
    await verify.waitUntilDisplayed(this.searchField, "Search edit field")
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


