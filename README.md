# spotback Demo: https://youtube.com/shorts/TbP9fTLoWOI

```sh
Spotback is a peer-to-peer parking community that matches users in need of parking with those who are vacating their spot. Our user-friendly interface enables the user to effortlessly find a parking space with just one click or by entering their destination. Spotback ensures that the user is directed to a parking spot that is within a reasonable walking distance to their final destination. Additionally, our platform allows the user vacating their spot to pin their location, enabling the spot-matching process to begin before they even reach their vehicle. This efficient process ensures a seamless transition, eliminating wait times and enabling users to arrive at their parking spot within minutes of each other. We plan to build out new features for Spotback to make it into the one-stop shop for parking apps. 

```




Spotback React Native
Full React Native Environment Set Up Here: https://reactnative.dev/docs/environment-setup

## First

```sh
brew install node
brew install watchman
sudo gem install cocoapods

```

## Second

```sh
brew tap AdoptOpenJDK/openjdk
brew install --cask adoptopenjdk8

```

## Third

```sh
Download and install Android Studio from https://developer.android.com/studio/index.html
Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:
Android SDK
Android SDK Platform
Performance (Intel ® HAXM) (See here for AMD)
Android Virtual Device
Then, click "Next" to install all of these components.
If the checkboxes are grayed out, you will have a chance to install these components later on.


```

## Fourth

```sh
The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:
Android SDK Platform 30
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
```

## Fifth

```sh
Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.
Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc config file unless using zsh.
To enter profile do => open ~/.zshrc
In android studio find your path in the android SDK location
Copy Paste this below =>

export ANDROID_HOME=/Your/Path/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

Then run => source ~/.zshrc and echo $ANDROID_HOME
Next quit terminal and reopen

Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
```

## Sixth

```sh
npm install
cd ios && pod install
```

## Seventh

Create an env file and add in the following format:

```txt
KEY=VALUE
```

## Eigth

```sh
npx react-native run-android

npx react-native run-ios

npx react-native run-ios --simulator "iPhone X"
```

## Common Commands Android

```sh

cd android && ./gradlew clean && cd ..

cd android && ./gradlew assembleRelease && cd ..

cd android &&  ./gradlew cleanBuildCache && cd ..

cd android && ./gradlew --stop && cd ..

rm -Rfv ~/.gradle/

ANDROID NUKE
rm -rf ~/.rncache && rm -rf node_modules && rm -rf package-lock && cd android/app && rm -rf build && cd .. && cd .. && npm install && npm start --reset-cache

npm cache clear --force

Adb devices
adb -s emulator-5554 emu kill

adb shell input keyevent 82

with ES7+ React/Redux/React-Native snippets installed run rnfe in editor

```

## Common Commands IOS

```sh

Open Xcode go to product
Clean build folder
rm -rf node_modules
Npm install
Cd ios
Pod deintegrate
Pod install
Pod update
Pod install

Npm start --reset-cache

IOS NUKE
rm -rf ~/Library/Caches/CocoaPods && rm -rf ~/Library/Developer/Xcode/DerivedData/* && rm -rf ~/.rncache && rm -rf node_modules && rm -rf package-lock && cd ios && rm -rf Podfile.lock && rm -rf Pods && rm -rf Build && cd .. && npm install --force && cd ios && pod install && cd .. && npm start --reset-cache

IOS/ANDROID NUKE
rm -rf ~/Library/Caches/CocoaPods && rm -rf ~/Library/Developer/Xcode/DerivedData/* && rm -rf ~/.rncache && rm -rf node_modules && rm -rf package-lock && cd ios && rm -rf Podfile.lock && rm -rf Pods && rm -rf Build && cd .. && cd android/app && rm -rf build && cd .. && cd .. && npm install --force && cd ios && pod install && cd .. && npm start --reset-cache

Just IOS
rm -rf ~/Library/Caches/CocoaPods && rm -rf ~/Library/Developer/Xcode/DerivedData/* && cd ios && rm -rf Podfile.lock && rm -rf Pods && rm -rf Build && pod install


with ES7+ React/Redux/React-Native snippets installed run rnfe in editor

```
