const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/*.spec.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    'appium:automationName': 'UiAutomator2',
    'appium:orientation': 'PORTRAIT',
    'appium:deviceName': 'Pixel3a',
    'appium:platformVersion': '14',
    'appium:app': path.join(process.cwd(), "app//android/app-debug.apk"),
    'appium:appPackage': 'com.studocuproject',
    'appium:appActivity': '.MainActivity',
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './'
}]];

exports.config = config;
