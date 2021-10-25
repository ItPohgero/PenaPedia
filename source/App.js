import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  BackHandler,
  Alert,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Router from './routers/Drawer';

function App({navigation}) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Eits kak!',
        'Mau close aplikasi? tenang saja, kakak bisa kembali kapanpun',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ],
      );
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#07A3BC" />
      <Router />
    </NavigationContainer>
  );
}

export default App;
