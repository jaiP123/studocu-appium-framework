# STUDOCU-Automatiom-Framework

## Tools
Tool | Version required | Download Links
-----|-----------|----------------
Java | 11 or +   | Brew 
XCode| 14.2      | Appstore
Node | v21.2.0   | Brew 
Android SDK | [Android SDK](https://developer.android.com/studio)
Appium | latest    | [Appium](https://appium.io/docs/en/about-appium/getting-started/?lang=en#installing-appium)
Appium Inspector |  | [Appium Inspector]( https://github.com/appium/appium-inspector/releases/tag/v2023.2.1)

**Local Setup**
- Install NVM
- Install Node JS
- Download Java - `brew install java11` ([Java Installation](https://medium.com/@kirebyte/using-homebrew-to-install-java-jdk11-on-macos-2021-4a90aa276f1c)). 
   Set system path: 
  `echo 'export PATH="/usr/local/opt/openjdk@11/bin:$PATH"' >> ~/.zshrc

- Install Yarn package Manager - `npm install -g yarn`

 **Framework Setup**
- Run `yarn` or `npm install` to install all dependencies.
- install Uiautomator2 & XCuittest drivers.

 **Setup simulator**
- Setup simulator/Emulators 
 -  Android Emulator Setup:
  1. Install Android Studio:
    Download and install Android Studio from the official site.
    Open Android Studio and navigate to Tools > AVD Manager.
    Create a Virtual Device (AVD):
    Click on "Create Virtual Device" in the AVD Manager.
    Choose a device definition (e.g., Pixel, Nexus) and select a system image (Android version).
    Follow the prompts to create the virtual device.
    Configure Virtual Device Settings:
    Customize settings such as RAM, storage, and screen orientation for the virtual device.
    Start the virtual device from the AVD Manager.

- iOS Simulator Setup:
 1. Install Xcode:
    Download and install Xcode from the Mac App Store.
    Launch Simulator from Xcode:

 2. Open Xcode and navigate to Xcode > Open Developer Tool > Simulator.
    The Simulator window will open, allowing you to select different iOS device types and versions.

## Execute Tests Locally on Simulators or Real Devices
1. Make sure that config/<android/ios>.wdio.conf.js is configured with correct emulator , device capabilities and are connected to your local machine.
2. if you want to run individual test use below command -
`npx wdio {config} --spec {filename}`
3. To run all specs files use  
  for Android- `yarn android:regression` 
  for iOS- `yarn ios:regression` 

**Note**: No need to run appium server separately.

## Execute Tests in SauceLabs/Browserstack from Local Machine
To Do: Get cloud license to connect & execute tests on cloud platform 

## Parallel execution
- Change maxInstances count to number of threads in wdio.shared.conf.js
- Currently it is set to maxInstances: 1,

## Reporting 
- Spec reporting is used . Log level is set to "error" .reporters: ['spec']
- To do :Advanced reporting can be implemented to show graphs 

## CI/CD pipeline
- This can be integrated with CI/CD pipeline .

