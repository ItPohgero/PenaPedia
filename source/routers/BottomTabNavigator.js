import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  AgendaScreen,
  BeasiswaScreen,
  OrganisasiScreen,
} from '../screens';
import MyTabBar from './MyTabBar';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}
      sceneContainerStyle={{backgroundColor: '#f1f1f1'}}>
      <Tab.Screen name="agenda" component={AgendaScreen} />
      <Tab.Screen name="beasiswa" component={BeasiswaScreen} />
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="organisasi" component={OrganisasiScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
