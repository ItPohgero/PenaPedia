import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Line from './components/Line';
import User from '../../assets/logoSvg/user.svg';

const ProfileScreen = () => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 40, alignItems: 'center',}}>
        <User width={50} height={50} fill="gray" />
        <View style={{marginLeft: 20}}>
          <Text style={{fontWeight: 'bold'}}>Wahyu Agus Arifin</Text>
          <Text>17947638</Text>
        </View>
      </View>
      <Line title="Profile" />
      <Line title="Panduan" />
      <Line title="Tentang aplikasi" />
      <Text style={{marginTop: 50, textAlign: 'center', fontSize: 12}}>
        Aplikasi Versi 1.0
      </Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
