import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BackArrow from '../components/BackArrow/BackArrow';
import Account from '../views/Account/Account';
import EditProfile from '../views/EditProfile/EditProfile';
import FindMeASpot from '../views/FindMeASpot/FindMeASpot';
import Help from '../views/Help/Help';
import Home from '../views/Home/Home';
import InviteAFriend from '../views/InviteAFriend/InviteAFriend';
import Login from '../views/Login/Login';
import Onboarding from '../views/Onboarding/Onboarding';
import PostMySpot from '../views/PostMySpot/PostMySpot';
import Signup from '../views/Signup/Signup';
import { navigationRef } from './RootNavigation';
import { RootStackParamsList } from './types';
// import Payments from '../views/Payments/Payments';
import { theme } from '@utils/theme';
import AuthLoading from '../views/AuthLoading/AuthLoading';
import SearchingForMatch from '../views/SearchingForMatch/SearchingForMatch';
import SpotExchange from '../views/SpotExchange/SpotExchange';
import SpotExchangeComplete from '../views/SpotExchangeComplete/SpotExchangeComplete';

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
              shadowColor: 'transparent',
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
              shadowColor: 'transparent',
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
              shadowColor: 'transparent',
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
              shadowColor: 'transparent',
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
              shadowColor: 'transparent',
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
              shadowColor: 'transparent',
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
              shadowColor: 'transparent',
            },
            headerLeft: () => <BackArrow navigationDirection="Home" />,
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
              shadowColor: 'transparent',
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
              shadowColor: 'transparent',
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
              shadowColor: 'transparent',
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
