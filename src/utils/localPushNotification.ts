import notifee, { AndroidStyle, Notification } from '@notifee/react-native';

export const onDisplayNotification = async (id, name, title, body, smallIcon?) => {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

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
