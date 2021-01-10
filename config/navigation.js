import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InputBoards from '../pages/InputBoards';
import ListBoards from '../pages/ListBoards';

const NavStack = createStackNavigator();
const NavStackScreen = () => (
  <NavStack.Navigator
    screenOptions={{
      headerShown: true,
    }}
    initialRouteName="ListBoards">
    {/* <NavStack.Screen name="ListBoards" component={ListBoards} options={{ title: 'Overview' }}/> */}
    <NavStack.Screen
      name="InputBoards"
      component={InputBoards}
      options={{ title: 'Add New Board' }}
    />
    <NavStack.Screen
      name="ListBoards"
      component={ListBoards}
      options={{ title: 'Boards List' }}
    />
  </NavStack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <NavStackScreen />
  </NavigationContainer>
);

export default Navigation;
