const SearchScreen = require("../screenobjects/search.screen");
const SearchResultScreen = require("../screenobjects/searchresult.screen");
const { BOOKNAME, BOOKS_COUNT, BOOK_TITLE } = require("../../src/utils/constants");

describe('Search Scenarios', () => {
  /*  beforeEach('preconditions for each test', async()=>{
      await restartApp()
    })  
 */
  it('Verify search books count  ', async () => {
    //wait addded since app is too slow
    await SearchScreen.searchBook(BOOKNAME)
    await SearchScreen.clickSearch()
    await driver.pause(40000);
    await SearchResultScreen.getResultCount(BOOKS_COUNT);
    await SearchResultScreen.clickGoBack();
  });

  it('Verify search books using Title ', async () => {
    await SearchScreen.searchBook(BOOK_TITLE)
    await SearchScreen.clickSearch()
    await driver.pause(40000);
    await SearchResultScreen.getResultTitle();
    await SearchResultScreen.clickGoBack();
  });

});

