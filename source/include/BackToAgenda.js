import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Home from '../assets/logoSvg/home.svg';
import Color from '../utils/Color';

const BackToAgenda = ({navigation}) => {
    return (
      <View style={{position: 'absolute', bottom: 70, right: 10, zIndex: 10000}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('agenda')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.first,
            borderRadius: 50,
            width: 40,
            height: 40,
            elevation: 5,
          }}>
          <Home widht={15} height={15} fill="white" />
        </TouchableOpacity>
      </View>
    );
}

export default BackToAgenda

const styles = StyleSheet.create({})
