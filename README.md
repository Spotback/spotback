# spotback

Spotback React Native for Android

## First

```sh
brew install node
brew install watchman
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
$ npm install
```

## Seventh

Create an env file and add in the following format:

```txt
KEY=VALUE
```

## Eigth

```sh
$ npx react-native run-android
```


## Common Commands

```sh
npx react-native run-android 

cd android && ./gradlew clean && cd ..

cd android && ./gradlew assembleRelease && cd ..

cd android &&  ./gradlew cleanBuildCache && cd ..

cd android && ./gradlew --stop && cd ..

rm -Rfv ~/.gradle/

rm -rf ~/.rncache && rm -rf node_modules && rm -rf package-lock && cd android/app && rm -rf build && cd .. && cd .. && npm install && npm start --reset-cache

npm cache clear --force

Adb devices
adb -s emulator-5554 emu kill

adb shell input keyevent 82

with ES7+ React/Redux/React-Native snippets installed run rnfe in editor

```