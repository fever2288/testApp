## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Running Tests](#running-tests)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Download and install [Node.js](https://nodejs.org/).
- **Expo CLI**: Install Expo CLI globally by running:
  ```sh
  npm install -g expo-cli
  ```

## Installation

To install the project, follow these steps:

1. Clone this repository:

2. Install the dependencies:
   ```sh
   npm install
   ```

## Running the App

Before running the app make sure to run server first. There is env.ts file in utils folder of this project where PORT and IP adress must be set in fields for live (just for demonstration) and DEV enviorment. The PORT number is PORT of the server which you can find in index file of server project. Getting IP adress depending on system that is running the project. On WINDOWS in terminal run command ipconfig. IP address will be listed. Usually, it will say IPv4 Address and follow the prefix 192.168.1.# or 192.168.0.#. On MAC the fastest way to find this information is by opening the Apple menu, and then heading to System Preferences > Network. Select your network connection, and then click “Advanced.” IP address information is on the “TCP/IP” tab. When you have all information combine it and set it as localHost

To run the app, choose if you want to run android or ios app. Note that iOS apps can only be run on Mac devices, while Android apps can be run on both Mac and Windows devices.

- **iOS**:

  - Requires a Mac device.
  - Download Xcode [Xcode](https://developer.apple.com/xcode/)
  - Start the simulator
  - From the root of the project run
    ```sh
    npm run ios
    ```

`````

- **Android**:

  - Can be run on both Mac and Windows devices.
  - Download [Android Studio](https://developer.android.com/studio)
  - Create simulator and start it
  - From the root of the project run
    ```sh
    npm run android
    ```


## Running tests

To run test, run the following command

````sh
  npm run test
  ```

## Troubleshooting

If you encounter any issues, try the following steps:

- Ensure all dependencies are installed correctly by running `npm install` again.
- Make sure you have the latest version of Expo CLI by running:
```sh
npm install -g expo-cli
````
`````
