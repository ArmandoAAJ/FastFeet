import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Login from '~/pages/Sign/index';

import TabNavigator from './tabNavigator';

const Stack = createStackNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <>
      {signed ? (
        <TabNavigator />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false, headerMode: 'screen' }}
          />
        </Stack.Navigator>
      )}
    </>
  );
}
