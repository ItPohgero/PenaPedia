import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import PenaPedia from '../assets/pena.svg';
import PenaPediaActive from '../assets/pena-active.svg';

import {Agenda, Obrolan, Beasiswa, Organisasi} from '../assets/logoSvg';

const Imglogo = ({label, isFocused}) => {
  if (label == 'home') {
    return isFocused ? (
      <View style={styles.menuCenter}>
        <PenaPediaActive width={40} height={40} />
      </View>
    ) : (
      <View style={styles.menuCenter}>
        <PenaPedia width={40} height={40} />
      </View>
    );
  }

  if (label == 'profile') {
    return isFocused ? (
      <Obrolan width={18} height={18} fill="#07A3BC" />
    ) : (
      <Obrolan width={18} height={18} fill="gray" />
    );
  }

  if (label == 'beasiswa') {
    return isFocused ? (
      <Beasiswa width={18} height={18} fill="#07A3BC" />
    ) : (
      <Beasiswa width={18} height={18} fill="gray" />
    );
  }

  if (label == 'agenda') {
    return isFocused ? (
      <Agenda width={18} height={18} fill="#07A3BC" />
    ) : (
      <Agenda width={18} height={18} fill="gray" />
    );
  }

  if (label == 'organisasi') {
    return isFocused ? (
      <Organisasi width={18} height={18} fill="#07A3BC" />
    ) : (
      <Organisasi width={18} height={18} fill="gray" />
    );
  }
};

const styles = StyleSheet.create({
  menuCenter: {
    backgroundColor: '#f1f1f1',
    padding: 8,
    position: 'absolute',
    bottom: 1,
    borderRadius: 30,
  },
});

export default Imglogo;
