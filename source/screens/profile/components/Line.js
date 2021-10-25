import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Right from '../../../assets/logoSvg/right.svg';

const Line = ({title}) => {
    return (
      <View style={styles.line}>
        <Text>{title}</Text>
        <TouchableOpacity>
          <Right width={20} height={20} fill="#aaa" />
        </TouchableOpacity>
      </View>
    );
}

export default Line

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7,
    borderColor: '#ddd',
    paddingVertical: 20,
  },
});
