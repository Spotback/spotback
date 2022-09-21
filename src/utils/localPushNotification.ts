import notifee, { AuthorizationStatus } from '@notifee/react-native';
import { Alert } from 'react-native';

export const onDisplayNotification = async (id, name, title, body, smallIcon?) => {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  const batteryOptimizationEnabled = await notifee.isBatteryOptimizationEnabled();
  if (batteryOptimizationEnabled) {
    // 2. ask your users to disable the feature
    Alert.alert(
      'Restrictions Detected',
      'To ensure notifications are delivered, please disable battery optimization for the app.',
      [
        // 3. launch intent to navigate the user to the appropriate screen
        {
          text: 'OK, open settings',
          onPress: async () => await notifee.openBatteryOptimizationSettings(),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  }
  
  const settings = await notifee.getNotificationSettings();

  if (settings.authorizationStatus == AuthorizationStatus.AUTHORIZED) {
    console.log('Notification permissions has been authorized');
  } else if (settings.authorizationStatus == AuthorizationStatus.DENIED) {
    console.log('Notification permissions has been denied');
  }

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id,
    name,
  });

  // Display a notification
  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      smallIcon, // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id,
      },
    },
  });
};
