import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import SplashScreen from './../screens/SplashScreen';
import ChatScreen from './../screens/chat/ChatScreen';
import LoadChat from '../screens/chat/LoadChat';
import AgendaSearch from '../screens/agenda/AgendaSearch';
import AgendaShow from '../screens/agenda/AgendaShow';

const Stack = createNativeStackNavigator();

const Router = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      {/* Navigation */}
      <Stack.Screen name="LoadChat" component={LoadChat} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      {/* Agenda */}
      <Stack.Screen name="AgendaSearch" component={AgendaSearch} />
      <Stack.Screen name="AgendaShow" component={AgendaShow} />
    </Stack.Navigator>
  );
};

export default Router;
