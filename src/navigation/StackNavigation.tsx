import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from 'src/routes';
import { HOME_SCREEN } from 'src/constants/screens';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName={HOME_SCREEN}>
      {routes.map(({ name, title, component, headerShown }) => (
        <Stack.Screen key={name} name={name} component={component} options={{ title, headerShown }} />
      ))}
    </Stack.Navigator>
  );
}

export default StackNavigation;
