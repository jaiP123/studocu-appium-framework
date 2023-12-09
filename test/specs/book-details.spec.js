
const SearchScreen = require("../screenobjects/search.screen");
const SearchResultScreen = require("../screenobjects/searchresult.screen");
const BookDetailsScreen = require("../screenobjects/bookdetails.screen");
const { BOOK_TITLE } = require("../../src/utils/constants");


describe('Book Details Scenarios', () => {
  /*  beforeEach('preconditions for each test', async()=>{
     await restartApp()
   })  
*/
  it.only('Verify book deatils show book name , summary ,author', async () => {
    //wait addded since app is too slow
    await SearchScreen.searchBook(BOOK_TITLE)
    await SearchScreen.clickSearch()
    await driver.pause(40000);
    await BookDetailsScreen.openBook();
    await driver.pause(10000);
    await BookDetailsScreen.getTitle();
    await BookDetailsScreen.getAuthorBook();
    await driver.pause(10000);
    await BookDetailsScreen.getBookSummary();
    await BookDetailsScreen.clickGoBack();
    await BookDetailsScreen.clickGoBack();
  });

  it('Verify add/remove book to Reading List ', async () => {
    await SearchScreen.searchBook(BOOK_TITLE)
    await SearchScreen.clickSearch()
    await driver.pause(40000);
    await BookDetailsScreen.openBook();
    await driver.pause(10000);
    await BookDetailsScreen.addBookToReadinglistAndRemove()
    await BookDetailsScreen.clickGoBack();
    await BookDetailsScreen.clickGoBack();
  });

  it.skip('Verify add/remove book to wishlist ', async () => {
    await SearchScreen.searchBook(BOOK_TITLE)
    await SearchScreen.clickSearch()
    await driver.pause(30000);
    await BookDetailsScreen.openBook();
    await driver.pause(10000);
    await BookDetailsScreen.addBookToWishlistAndRemove()
    await BookDetailsScreen.clickGoBack();
    await BookDetailsScreen.clickGoBack();
  });

});

