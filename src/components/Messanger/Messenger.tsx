/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { phone } from '@assets/images/index';
import useStyles from './Messenger.styles';

interface MessengerProps {
  title?: string;
  onPress?: any;
}
const Messenger: FC<MessengerProps> = ({ title, onPress }) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.incomingText}></ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        //   onChangeText={onChangeText} value={value}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>On My Way!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Almost There</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>I'm Here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={phone} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Messenger;
