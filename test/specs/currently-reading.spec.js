const SearchScreen = require("../screenobjects/search.screen");
const SearchResultScreen = require("../screenobjects/searchresult.screen");
const BookDetailsScreen = require("../screenobjects/bookdetails.screen");
const CurrentlytReadingScreen = require("../screenobjects/currentlyreading.screen");
const { BOOK_TITLE } = require("../../src/utils/constants");


describe('Currently reading  Scenarios', () => {
  /*  beforeEach('preconditions for each test', async()=>{
     await restartApp()
   })  
*/
  it('Verify add book to currently reading book', async () => {
    await driver.pause(3000);
    await SearchScreen.searchBook(BOOK_TITLE)
    await SearchScreen.clickSearch()
    await driver.pause(30000);
    await BookDetailsScreen.openBook();
    await driver.pause(3000);
    await BookDetailsScreen.tapOnAddBookToCurrentlyReadingIcon()
    await driver.pause(1000);
    await BookDetailsScreen.goToCurrentlyReadingScreen()
    await driver.pause(2000);
    await CurrentlytReadingScreen.getTitle()
    await CurrentlytReadingScreen.clickGoBack()
    await BookDetailsScreen.tapOnAddBookToCurrentlyReadingIcon()
    await CurrentlytReadingScreen.clickGoBack()
    await CurrentlytReadingScreen.clickGoBack()
  });

});

