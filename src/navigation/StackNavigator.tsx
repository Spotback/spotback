import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamsList } from './types';
import { navigationRef } from './RootNavigation';
import BackArrow from '../components/BackArrow/BackArrow';
import Onboarding from '../views/Onboarding/Onboarding';
import Signup from '../views/Signup/Signup';
import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
import FindMeASpot from '../views/FindMeASpot/FindMeASpot';
import PostMySpot from '../views/PostMySpot/PostMySpot';
import Account from '../views/Account/Account';
import TransferToBank from '../views/TransferToBank/TransferToBank';
import InviteAFriend from '../views/InviteAFriend/InviteAFriend';
import EditProfile from '../views/EditProfile/EditProfile';
import Help from '../views/Help/Help';
import Payments from '../views/Payments/Payments';
import SearchingForMatch from '../views/SearchingForMatch/SearchingForMatch';
import SpotExchange from '../views/SpotExchange/SpotExchange';
import SpotExchangeComplete from '../views/SpotExchangeComplete/SpotExchangeComplete';
import AuthLoading from '../views/AuthLoading/AuthLoading';
import { theme } from '@utils/theme';

const Stack = createStackNavigator<RootStackParamsList>();

const StackNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthLoading"
          component={AuthLoading}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: theme.colors.background,
              // TODO: Remove PT Sans Font would crash IOS
            },
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => <BackArrow navigationDirection="Onboarding" />,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: theme.colors.background,
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
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: theme.colors.dark,
              
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => <BackArrow navigationDirection="Home" />,
          }}
        />
        <Stack.Screen
          name="PostMySpot"
          component={PostMySpot}
          options={{
            title: 'Post My Spot',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: theme.colors.dark,
              
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => <BackArrow navigationDirection="Home" />,
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            title: 'Account',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: theme.colors.dark,
              
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => <BackArrow navigationDirection="Home" />,
          }}
        />
        <Stack.Screen
          name="TransferToBank"
          component={TransferToBank}
          options={{
            title: 'Transfer to Bank',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: theme.colors.dark,
              
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => <BackArrow navigationDirection="Account" />,
          }}
        />
        <Stack.Screen
          name="InviteAFriend"
          component={InviteAFriend}
          options={{
            title: 'Invite a Friend',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: theme.colors.dark,
              
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => <BackArrow navigationDirection="Account" />,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: 'Edit Profile',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: theme.colors.dark,
              
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => <BackArrow navigationDirection="Account" />,
          }}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{
            title: 'Help',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: theme.colors.dark,
              
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => <BackArrow navigationDirection="Account" />,
          }}
        />
        <Stack.Screen
          name="Payments"
          component={Payments}
          options={{
            title: 'Payment Information',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: theme.colors.dark,
              
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            headerLeft: () => <BackArrow navigationDirection="Account" />,
          }}
        />
        <Stack.Screen
          name="SearchingForMatch"
          component={SearchingForMatch}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SpotExchange"
          component={SpotExchange}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SpotExchangeComplete"
          component={SpotExchangeComplete}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
