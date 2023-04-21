import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { DetailsScreen } from '../screens/details';
import { PublicEventsScreen } from '../screens/publicEvents';
import { RootNavigatorScreenNames } from '../types/navigation';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={RootNavigatorScreenNames.publicEvents}>
      <Stack.Screen
        name={RootNavigatorScreenNames.publicEvents}
        component={PublicEventsScreen}
      />
      <Stack.Screen
        name={RootNavigatorScreenNames.details}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
