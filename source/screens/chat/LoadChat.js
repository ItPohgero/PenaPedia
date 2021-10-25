import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const LoadChat = ({route, navigation}) => {
  const {url} = route.params;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(url);
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Kami siapkan obrolannya dulu rekans...</Text>
    </View>
  );
};

export default LoadChat;

const styles = StyleSheet.create({});
