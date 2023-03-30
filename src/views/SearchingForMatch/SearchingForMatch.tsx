import { Button, Loader } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import useStyles from './SearchingForMatch.styles';
import { sqsMatchingResMessage } from '@services/sqsMatchingResMessage';
import usePoll from 'react-use-poll';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { UserSpotPosition, UserTypes } from '@services/types';
import * as RootNavigation from '@navigation/RootNavigation';

const SearchingForMatch = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.userReducer);

  usePoll(
    async () => {
      if (user.UserSpotPosition === UserSpotPosition.PARKER) {
        const sqsMatchingRes = await sqsMatchingResMessage();
        dispatch({
          type: UserTypes.MATCH,
          payload: sqsMatchingRes,
        });
        console.log('Hello world!', sqsMatchingRes);
        RootNavigation.navigate('SpotExchange');
      }
    },
    [],
    {
      interval: 10000,
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
function dispatch(arg0: { type: UserTypes; payload: any }) {
  throw new Error('Function not implemented.');
}
