import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackActions} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('BottomTabNavigator'));
    }, 5000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        source={require('../assets/lottie/flashscreen.json')}
        autoPlay
        loop
        style={{ width: 120, height: 120 }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
