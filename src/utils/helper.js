const { ANDROID_BUNDLE_ID, IOS_BUNDLE_ID } = require('./constants');

const isAndroid = () => {
  return driver.isAndroid;
};
const isIOS = () => {
  return driver.isIOS;
};

const restartApp = async () => {
  if (isAndroid()) {
    await driver.terminateApp(ANDROID_BUNDLE_ID);
    await driver.activateApp(ANDROID_BUNDLE_ID);
  }
  if (isIOS()) {
    await driver.terminateApp(IOS_BUNDLE_ID);
    await driver.activateApp(IOS_BUNDLE_ID);
  }
  await driver.setOrientation('PORTRAIT');
};

module.exports = { isAndroid, isIOS, restartApp }; 
