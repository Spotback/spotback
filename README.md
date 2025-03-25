# 🚗 Spotback – Peer-to-Peer Parking App

🎥 **Demo:** [Watch on YouTube](https://youtube.com/shorts/TbP9fTLoWOI)

---

## 📖 What is Spotback?

**Spotback** Spotback is a peer-to-peer parking platform that connects drivers searching for parking with those about to leave a spot. With a simple, user-friendly interface, users can find a nearby space with one tap or by entering a destination. Spotback intelligently directs users to spots within walking distance, while drivers vacating their spots can pin their location in advance to streamline the handoff. This real-time coordination minimizes wait times and ensures a smooth, efficient parking experience.

---

# ⚙️ Spotback React Native Setup Guide

> 📚 Full React Native Environment Setup: [React Native Docs](https://reactnative.dev/docs/environment-setup)

---

## 🧱 Step 1 – Install Core Tools

```sh
brew install node
brew install watchman
sudo gem install cocoapods
```

---

## ☕ Step 2 – Install Java Development Kit

```sh
brew tap AdoptOpenJDK/openjdk
brew install --cask adoptopenjdk8
```

---

## 💻 Step 3 – Install Android Studio

Download and install from: [Android Studio](https://developer.android.com/studio/index.html)

When prompted:
- Choose **"Custom"** setup
- Check the following:
  - Android SDK
  - Android SDK Platform
  - Performance (Intel ® HAXM)
  - Android Virtual Device

> ℹ️ If checkboxes are grayed out, you can install components later via SDK Manager.

---

## 📦 Step 4 – Configure Android SDK Platforms

Inside Android Studio:
- Go to **Preferences > Appearance & Behavior > System Settings > Android SDK**
- Select the **SDK Platforms** tab
- Enable **Show Package Details**
- Under **Android 9 (Pie)**, check:
  - Android SDK Platform 30
  - Intel x86 Atom_64 System Image *or* Google APIs Intel x86 Atom System Image

---

## 🛠 Step 5 – Set Environment Variables

In terminal:
```sh
open ~/.zshrc
```

Paste the following (replace the path with your Android SDK path):

```sh
export ANDROID_HOME=/Your/Path/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Apply changes:
```sh
source ~/.zshrc
echo $ANDROID_HOME
```

> ✅ Close and reopen terminal after setting these variables.

---

## 📦 Step 6 – Install Dependencies

```sh
npm install
cd ios && pod install
```

---

## 🔐 Step 7 – Create `.env` File

Inside the root of your project, create a `.env` file:

```env
KEY=VALUE
```

---

## 🚀 Step 8 – Run the App

```sh
npx react-native run-android       # For Android
npx react-native run-ios           # For iOS
npx react-native run-ios --simulator "iPhone X"  # Specific simulator
```

---

********************************************************************************



# 📱 iOS & Android Dev Commands Cheat Sheet

## ✅ iOS Clean & Setup (One-Liner)
Open Xcode → Go to **Product > Clean Build Folder**

```bash
rm -rf node_modules && npm install && cd ios && pod deintegrate && pod install && pod update && cd .. && npm start --reset-cache
```

## 💣 iOS/Android Nuke
```bash
rm -rf ~/Library/Caches/CocoaPods && rm -rf ~/Library/Developer/Xcode/DerivedData/* && rm -rf ~/.rncache && rm -rf node_modules && rm -rf package-lock.json && cd ios && rm -rf Podfile.lock && rm -rf Pods && rm -rf Build && cd .. && cd android/app && rm -rf build && cd .. && cd .. && npm install && cd ios && pod install && cd .. && npm start --reset-cache
```

## 💣 iOS Nuke
```bash
rm -rf ~/Library/Caches/CocoaPods && rm -rf ~/Library/Developer/Xcode/DerivedData/* && rm -rf ~/.rncache && rm -rf node_modules && rm -rf package-lock.json && cd ios && rm -rf Podfile.lock && rm -rf Pods && rm -rf Build && cd .. && npm install && cd ios && pod install && cd .. && npm cache clear --force && npm start --reset-cache
```

## ⚠️ Reminder
Revert any changes to the following files if modified, as they may cause build failures:

- Info.plist
- Strings.xml
- Project.pbxproj

## 🤖 Android Commands
```bash
cd android && ./gradlew clean && cd ..
cd android && ./gradlew assembleRelease && cd ..
cd android && ./gradlew cleanBuildCache && cd ..
cd android && ./gradlew --stop && cd ..
rm -Rfv ~/.gradle/
rm -rf ~/.rncache && rm -rf node_modules && rm -rf package-lock && cd android/app && rm -rf build && cd .. && cd .. && npm install && npm start --reset-cache
```

## 🛑 Kill Emulator
```bash
adb devices
adb -s emulator-5554 emu kill
```

## ❌ Delete Android Studio (Full Uninstall)
```bash
rm -Rf /Applications/Android\ Studio.app && rm -Rf ~/Library/Preferences/AndroidStudio* && rm -Rf ~/Library/Preferences/Google/AndroidStudio* && rm -Rf ~/Library/Preferences/com.google.android.* && rm -Rf ~/Library/Preferences/com.android.* && rm -Rf ~/Library/Application\ Support/AndroidStudio*
rm -Rf ~/Library/Application\ Support/Google/AndroidStudio* && rm -Rf ~/Library/Logs/AndroidStudio*
rm -Rf ~/Library/Logs/Google/AndroidStudio* && rm -Rf ~/Library/Caches/AndroidStudio* && rm -Rf ~/.AndroidStudio*
```
