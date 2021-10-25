import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Search from '../../../assets/logoSvg/search.svg';
import User from '../../../assets/logoSvg/user.svg';
import Verified from '../../../assets/logoSvg/verified.svg';
import Color from '../../../utils/Color';

const Header = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingTop: 20,
          marginBottom: 10,
        }}>
        <View style={{flex: 9}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AgendaSearch')}
            style={styles.search}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Search width={20} height={20} fill="gray" />
              <Text style={{marginLeft: 10, fontSize: 11}}>
                Cari apa yang kamu butuhkan
              </Text>
            </View>
            <View>
              <Verified width={20} height={20} fill="gray" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 35,
              width: 35,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold'}}>19</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#07A3BC',
  },
  search: {
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    justifyContent: 'space-between',
  },
});
