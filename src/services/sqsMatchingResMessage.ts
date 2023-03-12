import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import { ReceiveMessageCommand, DeleteMessageCommand, SQSClient } from '@aws-sdk/client-sqs';

const queueURL = '';
const REGION = 'us-east-1';
const params = {
  AttributeNames: ['SentTimestamp'],
  MaxNumberOfMessages: 1,
  MessageAttributeNames: ['All'],
  QueueUrl: queueURL,
  WaitTimeSeconds: 20,
};
const sqsClient = new SQSClient({
  credentials: {
    accessKeyId: '',
    secretAccessKey: '',
  },
  region: REGION,
});
export const sqsMatchingResMessage = async () => {
  try {
    let responseToJSON;
    const data = await sqsClient.send(new ReceiveMessageCommand(params));
    if (data.Messages) {
      console.log('Success ', JSON.parse(data.Messages[0].Body as string));
      responseToJSON = JSON.parse(data.Messages[0].Body as string);
      const deleteParams = {
        QueueUrl: queueURL,
        ReceiptHandle: data.Messages[0].ReceiptHandle,
      };
      try {
        const data = await sqsClient.send(new DeleteMessageCommand(deleteParams));
        console.log('Message deleted', data);
      } catch (err) {
        console.log('Error', err);
      }
    } else {
      console.log('No messages to delete');
    }

    return responseToJSON;
  } catch (err) {
    console.log('Receive Error', err);
  }
};
