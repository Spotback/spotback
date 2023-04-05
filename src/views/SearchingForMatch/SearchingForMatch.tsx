import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import usePoll from 'react-use-poll';
import { useNavigation } from '@react-navigation/native';

import { Button, Loader } from '@components/index';
import { sqsMatchingResMessage } from '@services/sqsMatchingResMessage';
import { UserSpotPosition, UserTypes } from '@services/types';
import * as RootNavigation from '@navigation/RootNavigation';
import { userPositionSelector } from '../../services/selectors';

import useStyles from './SearchingForMatch.styles';

const SearchingForMatch = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userPosition = useSelector(userPositionSelector);

  usePoll(
    async () => {
      const sqsMatchingRes = await sqsMatchingResMessage();
      if (userPosition === UserSpotPosition.PARKER && sqsMatchingRes !== undefined) {
        dispatch({
          type: UserTypes.MATCH,
          payload: sqsMatchingRes,
        });
        console.log('SQS FROM AWS RECEIVED', sqsMatchingRes);
        RootNavigation.navigate('SpotExchange');
      }
    },
    [],
    {
      interval: 5000,
    }
  );

  return (
    <View style={styles.container}>
      <Loader />
      <Text style={styles.text}>Searching for a match</Text>
      <View style={styles.button}>
        <Button title="Cancel" size="large" onPress={() => navigation.navigate('SpotExchange')} />
      </View>
    </View>
  );
};

export default SearchingForMatch;
