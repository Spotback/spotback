import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BackArrow from '../BackArrow/BackArrow';
import Onboarding from '../../views/Onboarding/Onboarding';
import Signup from '../../views/Signup/Signup';
import Login from '../../views/Login/Login';
import Home from '../../views/Home/Home';
import FindMeASpot from '../../views/FindMeASpot/FindMeASpot';
import Account from '../../views/Account/Account';
import TransferToBank from '../../views/TransferToBank/TransferToBank';
import InviteAFriend from '../../views/InviteAFriend/InviteAFriend';
import EditProfile from '../../views/EditProfile/EditProfile';
import Help from '../../views/Help/Help';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: '#FDFFFD',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: '#FDFFFD',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerLeft: () => <BackArrow navigationDirection="Onboarding" />,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: '#FDFFFD',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerLeft: () => <BackArrow navigationDirection="Onboarding" />,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FindMeASpot"
          component={FindMeASpot}
          options={{
            title: 'Find Me A Spot',
            headerTitleStyle: {
              color: '#000000',
              fontFamily: 'PT Sans',
              fontWeight: 'bold',
              fontSize: 24,
              textAlign: 'center',
              paddingTop: 2.5,
              marginRight: 55,
            },
            headerStyle: {
              backgroundColor: '#FDFFFD',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerLeft: () => <BackArrow navigationDirection="Home" />,
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            title: 'Account',
            headerTitleStyle: {
              color: '#000000',
              fontFamily: 'PT Sans',
              fontWeight: 'bold',
              fontSize: 24,
              textAlign: 'center',
              paddingTop: 2.5,
              marginRight: 55,
            },
            headerStyle: {
              backgroundColor: '#FDFFFD',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerLeft: () => <BackArrow navigationDirection="Home" />,
          }}
        />
        <Stack.Screen
          name="TransferToBank"
          component={TransferToBank}
          options={{
            title: 'Transfer to Bank',
            headerTitleStyle: {
              color: '#000000',
              fontFamily: 'PT Sans',
              fontWeight: 'bold',
              fontSize: 24,
              textAlign: 'center',
              paddingTop: 2.5,
              marginRight: 55,
            },
            headerStyle: {
              backgroundColor: '#FDFFFD',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerLeft: () => <BackArrow navigationDirection="Account" />,
          }}
        />
        <Stack.Screen
          name="InviteAFriend"
          component={InviteAFriend}
          options={{
            title: 'Invite a Friend',
            headerTitleStyle: {
              color: '#000000',
              fontFamily: 'PT Sans',
              fontWeight: 'bold',
              fontSize: 24,
              textAlign: 'center',
              paddingTop: 2.5,
              marginRight: 55,
            },
            headerStyle: {
              backgroundColor: '#FDFFFD',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerLeft: () => <BackArrow navigationDirection="Account" />,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: 'Edit Profile',
            headerTitleStyle: {
              color: '#000000',
              fontFamily: 'PT Sans',
              fontWeight: 'bold',
              fontSize: 24,
              textAlign: 'center',
              paddingTop: 2.5,
              marginRight: 55,
            },
            headerStyle: {
              backgroundColor: '#FDFFFD',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerLeft: () => <BackArrow navigationDirection="Account" />,
          }}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{
            title: 'Help',
            headerTitleStyle: {
              color: '#000000',
              fontFamily: 'PT Sans',
              fontWeight: 'bold',
              fontSize: 24,
              textAlign: 'center',
              paddingTop: 2.5,
              marginRight: 50,
            },
            headerStyle: {
              backgroundColor: '#FDFFFD',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerLeft: () => <BackArrow navigationDirection="Account" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
