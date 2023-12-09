class Verify {

  async waitUntilDisplayed(webElement, elementName, timeoutValue) {
    if (timeoutValue == null)
      timeoutValue = 10000
    await webElement.waitUntil(async () => {
      return await webElement.isDisplayed()
    }, {
      timeout: timeoutValue,
      timeoutMsg: `${elementName} is not displayed`
    })
  }

  async waitUntilEnabled(webElement, elementName, timeoutValue) {
    if (timeoutValue == null)
      timeoutValue = 10000
    await webElement.waitForEnabled({
      timeout: timeoutValue,
      timeoutMsg: `${elementName} is not displayed`
    })
  }

  async getTextValue(webElement) {
    await webElement.getValue()
  }
  
  async isClickable(webElement) {
    await webElement.waitForClickable()
  }

  async isElementDisplayed(webElement) {
    return webElement.isDisplayed()
  }

  async toBeDisplayed(webElement, elementName) {
    await expect(webElement).toBeDisplayed({ message: `${elementName} is not displayed`, })
  }

  async toBeNotDisplayed(webElement, failureMsg) {
    await expect(webElement).not.toBeDisplayed({ message: failureMsg })
  }

  async hasValue(webElement, value) {
    await expect(webElement).toHaveValue(value)
  }

  async hasTextContaining(webElement, expectedText) {
    await expect(webElement).toHaveTextContaining(expectedText)
  }


  async isEqual(actual, expected) {
    await expect(actual).toEqual(expected)
  }

  async contains(actual, expected) {
    await expect(actual).toContain(expected)
  }

  async isSelected(webElement) {
    await expect(webElement).toBeSelected()
  }

}

module.exports = new Verify();
