# React Native app

## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks.

## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run ios](#npm-run-ios)
  - [npm run android](#npm-run-android)
  - [npm run eject](#npm-run-eject)
- [Writing and Running Tests](#writing-and-running-tests)
- [Environment Variables](#environment-variables)
- [Adding Flow](#adding-flow)
- [Customizing App Display Name and Icon](#customizing-app-display-name-and-icon)
- [Sharing and Deployment](#sharing-and-deployment)
  - [Ejecting from Create React Native App](#ejecting-from-create-react-native-app)
- [Troubleshooting](#troubleshooting)
  - [iOS Simulator won't open](#ios-simulator-wont-open)
- [E2E tests](#e2e-tests)
  - [Running tests locally](#running-tests-locally)
    - [Tools that needs to be installed for running tests locally on Android Studio emulator](#tools-for-running-tests-locally-android-studio-emulator)
    - [Running tests locally on Android Studio emulator](#running-tests-locally-android-studio-emulator)
    - [Running tests locally in Sauce Labs](#running-tests-locally-in-sauce-labs)
  - [Configuration files](#configuration-files)
  - [Tests suites](#test-suites)
    - [regression suite](#regression-suite)
    - [running devices for suites](#running-devices-for-suites)
  - [CI/CD integration](#ci-cd-integration)
  - [test reporting](#test-reporting)
  - [testRail integration](#test-rail-integration)
  - [additional ifo](#additional-info)

## Updating to New Releases

You should only need to update the global installation of `create-react-native-app` very rarely, ideally never.

Updating the `react-native-scripts` dependency of your app should be as simple as bumping the version number in `package.json` and reinstalling your project's dependencies.

Upgrading to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions, and setting the correct `sdkVersion` in `app.json`. See the [versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md) for up-to-date information about package version compatibility.


1. Go to [https://github.com/settings/tokens](https://github.com/settings/tokens)

1. Click **Generate new token**

1. Give it a name like **GitHub packages**

1. Change the expiration to **No expiration**

1. Select the `read:packages` scope

1. Click **Generate token**

1. Copy the token! You won't be able to see it again once you perform the next step.

1. Click **Enable SSO** and then click **Authorize**

1. In the `.npmrc` file in your home directory (NOT in the `mobile-app/.npmrc` file; leave that file as it is), add the following line, replacing `YOUR-TOKEN` with the token you just made:

   ```
   //npm.pkg.github.com/:_authToken=YOUR-TOKEN
   ```

1. Install dependencies:

   ```
   yarn install
   ```

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

recomended to intall jest global
npm i jest --global

update coverage
jest --coverage

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Customizing App Display Name and Icon

You can edit `app.json`.

To change your app's display name, set the `app.name` key in `app.json` to an appropriate string.

To set an app icon, set the `app.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

## Adding Flow

Flow is a static type checker that helps you write code with fewer bugs. Check out this [introduction to using static types in JavaScript](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb) if you are new to this concept.

React Native works with [Flow](http://flowtype.org/) out of the box, as long as your Flow version matches the one used in the version of React Native.

To add a local dependency to the correct Flow version to a Create React Native App project, follow these steps:

1. Find the Flow `[version]` at the bottom of the included [.flowconfig](.flowconfig)
2. Run `npm install --save-dev flow-bin@x.y.z` (or `yarn add --dev flow-bin@x.y.z`), where `x.y.z` is the .flowconfig version number.
3. Add `"flow": "flow"` to the `scripts` section of your `package.json`.
4. Add `// @flow` to any files you want to type check (for example, to `App.js`).

Now you can run `npm run flow` (or `yarn flow`) to check the files for type errors.
You can optionally use a [plugin for your IDE or editor](https://flow.org/en/docs/editors/) for a better integrated experience.

To learn more about Flow, check out [its documentation](https://flow.org/).

## Sharing and Deployment

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

### Ejecting from Create React Native App

If you want to build and deploy your app yourself, you'll need to eject from CRNA and use Xcode and Android Studio.

This is usually as simple as running `npm run eject` in your project, which will walk you through the process. Make sure to install `react-native-cli` and follow the [native code getting started guide for React Native](https://facebook.github.io/react-native/docs/getting-started.html).

## Troubleshooting

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

- "non-zero exit code: 107"
- "You may need to install Xcode" but it is already installed
- and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

## e2e-tests

For now instruction is Windows specific

tests are written base on:

- WebdriverIO: 7.9.# [https://webdriver.io/docs/gettingstarted/](https://webdriver.io/docs/gettingstarted/)
- Appium: 1.21.# [http://appium.io/docs/en/about-appium/intro/](http://appium.io/docs/en/about-appium/intro/)

### running-tests-locally

#### tools-for-running-tests-locally-android-studio-emulator

- JAVA [https://java.com/en/download/](https://java.com/en/download/); JAVA_HOME needs to be added to System variables, example (Variable: JAVA_HOME; Value: C:\Program Files\OpenJDK\openjdk-8u302-b08)
- Android Studio [https://developer.android.com/studio](https://developer.android.com/studio); ANDROID_HOME needs to be added to System variables, example (Variable: ANDROID_HOME; Value:C:\Users\vrazu\AppData\Local\Android\Sdk )
- ADB [install adb](https://www.xda-developers.com/install-adb-windows-macos-linux/#adbsetupmacos) you can also install it from Android Studio -> SDK Manager
- Android Emulator [install android emulator](https://developer.android.com/studio/run/managing-avds) based on material you should open Android Studio -> AVD Manager
- Appium [appium](https://appium.io/)
- Nodejs [nodejs](https://nodejs.org/en/download/)

#### running-tests-locally-android-studio-emulator

Mainly it's needed when you are developing a new test or updating existed one, because test is running locally much faster, and it's easier to debug than in Sauce Labs

1. Make sure that Android emulator is running in Android Studio -> AVD Manager
2. Make sure that capabilities for running emulator set correctly in `wdio.conf.js` file, example:

```
  {
  'platformName': 'Android',
  'appium:deviceName': 'emulator-5554',
  'appium:automationName': 'UIAutomator2',
  'appium:platformVersion': '7.1',
  'appium:app': join(process.cwd(), join(process.cwd(), `android/app/build/outputs/apk/release/apkName.apk`)),
  }
```

```
   export const USER_NAME_1R_ML = process.env.USER_NAME_1R_ML || 'test1rml@test.com';
   export const USER_NAME_1R_1L = process.env.USER_NAME_1R_1L || 'test1r1l@test.com';
   export const USER_NAME_2R_1L = process.env.USER_NAME_2R_1L || 'test2r1l@test.com';
   export const USER_NAME_2R_ML = process.env.USER_NAME_2R_ML || 'test@test.com';
   export const PASSWORD = process.env.USER_NAME_1R_ML || 'password';
   export const SAUCE_USERNAME = process.env.SAUCE_USERNAME || 'test';
   export const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY || 'test';
   export const TESTRAIL_USER_NAME = process.env.TESTRAIL_USER_NAME
   export const TESTRAIL_USER_PASSWORD = process.env.TESTRAIL_USER_PASSWORD || 'testtest';
   export const MOBILE_APP_SUNBIRD_API_KEY = process.env.MOBILE_APP_SUNBIRD_API_KEY || 'test';
   export const MOBILE_APP_SUNBIRD_APP_ID = process.env.MOBILE_APP_SUNBIRD_APP_ID || 'test'
   export const CI_RUN = process.env.CI;
```

4. Make sure that all npm dependencies installed, otherwise run command `yarn install`
5. Set `maxInstances` value to 1 in [`wdio.conf.js`](wdio.conf.js). Don't forget to change `maxInstances` value back to 10 before merge
6. Build the apk by executing command `gradlew assembleRelease` from `android` folder and wait until apk is built
7. Command for running all tests locally `npm run test:e2e:local`
8. For running one specific test locally add test path to `wdio.conf.js` in specs section, example `specs: ['e2e-tests/test/specs/c212798_login.test.js'],` and run command `npm run test:e2e:local`, or execute command `npx wdio wdio.conf.js --spec pathToTestFromContentRoot`, example `npx wdio wdio.conf.js --spec e2e-tests/test/specs/c212798_login.test.js`, see also docs [run selected tests](https://webdriver.io/docs/organizingsuites/#run-selected-tests)

#### running-tests-locally-in-sauce-labs

it's an easier way for running tests as it's not required additional tools installation so if you are not developing a new tests and just want to run all tests locally just run tests locally in sauce labs.
In CI tests will be run in sauce-labs.


1. Populate file `e2e-tests/constants/custom-environment-variables.js` with credentials from confluence page [section VII. Custom-environment-variables for automation tests], example on `running-tests-locally-android-studio-emulator` section `step 3`
2. Make sure that all npm dependencies installed, otherwise run command `yarn install`
3. Build the apk by executing command `gradlew assembleRelease` from `android` folder and wait until apk is built
4. Command for running all tests in Sauce Labs `npm run test:e2e:sauce`
5. For running one specific test locally in sauce lab add test path to `wdio.conf.js` in specs section, example `specs: ['e2e-tests/test/specs/c212798_login.test.js'],` and run command `npm run test:e2e:sauce`, or execute command `npx wdio wdio.sauce.conf.js --spec pathToTestFromContentRoot`, example `npx wdio wdio.sauce.conf.js --spec e2e-tests/test/specs/c212798_login.test.js`, see also docs [run selected tests](https://webdriver.io/docs/organizingsuites/#run-selected-tests)

### configuration-files

main Configuration file placed here [`wdio.conf.js`](wdio.conf.js), you can read more about configurations here [wdio configurations](https://webdriver.io/docs/configurationfile/)

sauce labs Configuration file place here [`wdio.sauce.conf.js`](wdio.sauce.conf.js)

### test-suites

for now, we have only regression test suite, more info about wdio test suites, here [wdio organize test suites](https://webdriver.io/docs/organizingsuites/)

#### regression-suite

it's not actually a suite it's execution of all tests by command `npm run test:e2e:sauce`,it's planned to be added into CI and run on every deploy, it's running on 1 device set in [`wdio.sauce.conf.js`](wdio.sauce.conf.js)

#### running-devices-for-suites

running emulators in sauce labs lab can be easily changed in [`wdio.sauce.conf.js`](wdio.sauce.conf.js), see [sauce labs platform configuration](https://saucelabs.com/platform/platform-configurator)

### ci-cd-integration

TO BE ADDED once done

### test-reporting

TO BE ADDED once working on CI

### test-rail-integration

- For every test run in CI new run is created in TestRail, results for every executed test is added to Test Rail, run get closed after test execution
- All runs can be found here [TEST RUNS & RESULTS](https://tech.testrail.io/index.php?/runs/overview/9);
- To make TestRail integration work locally set `export const CI_RUN = process.env.CI || true;` in [`custom-environment-variables.js`](e2e-tests/constants/custom-environment-variables.js) before running tests;
- For adding new test to TestRail run make sure that testCaseId is set in test before hook, by calling function `setCurrentlyRunningTestRailTestCaseId(testCaseId)` from [`utils/testrail.js`](e2e-tests/utils/testrail.js) and testCaseId added to testRailInfo.regressionTestCasesIds array in [`wdio.conf.js`](wdio.conf.js)

### additional-info

Info about tests writing approach, locators strategy, sauce labs ui (debug and test video recording)
