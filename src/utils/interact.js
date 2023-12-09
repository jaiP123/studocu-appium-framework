
const verify = require('./verify');
const { isAndroid, isIOS } = require('./helper');

class Interact {

  async clickElement(webElement, elementName) {
    await verify.waitUntilDisplayed(webElement, elementName)
    await webElement.click()
  }

  async clickElementOnlyWhenEnabled(webElement, elementName) {
    await verify.waitUntilEnabled(webElement, elementName)
    await webElement.click()
  }

  async insertValue(webElement, value) {
    await webElement.setValue(value)
  }

  async selectDropDownValueByIndex(webElement, index) {
    await webElement.click()
    await webElement.selectByIndex(index)
  }

  async clearValue(webElement) {
    await webElement.clearValue()
  }

  async selectUsingText(webElement, text) {
    await webElement.selectByVisibleText(text)
  }

  async selectUsingAttribute(webElement, _attribute, _text) {
    await webElement.selectByAttribute(_attribute, _text)
  }

  async waitFor(milliseconds) {
    await driver.pause(milliseconds)
  }

  getTagName(webElement) {
    return webElement.getTagName()
  }

}
module.exports = new Interact();

