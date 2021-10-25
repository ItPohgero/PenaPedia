import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Search from '../../../assets/logoSvg/search.svg';
import User from '../../../assets/logoSvg/user.svg';
import Verified from '../../../assets/logoSvg/verified.svg';
import Chat from '../../../assets/logoSvg/komentar.svg';
import Color from '../../../utils/Color';

const Header = ({navigation}) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(secTimer);
  }, []);

  const date = new Date().toLocaleDateString();
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
            style={{padding: 8, backgroundColor: 'white', borderRadius: 20}}
            onPress={() =>
              navigation.navigate('LoadChat', {
                url: 'Chat',
              })
            }>
            <Chat width={18} height={18} fill={Color.first} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: 30}}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 11}}>
          Penapedia - Portal media layanan pendidikan Indonesia
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: -10,
          height: 20,
          marginLeft: 10,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <Text style={{color: 'orange'}}>{time}</Text>
        <Text style={{marginLeft: 8, color: 'white'}}>{date}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  body: {
    height: 100,
    backgroundColor: '#07A3BC',
    marginBottom: 15,
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
