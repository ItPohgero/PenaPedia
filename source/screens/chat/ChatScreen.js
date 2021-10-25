import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Color from '../../utils/Color';
import Back from '../../assets/logoSvg/back.svg';
import Chat from '../../assets/logoSvg/komentar.svg';

const ChatScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Back widht={25} height={25} fill="white" />
        </TouchableOpacity>
        <View style={{flex: 10, justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 12}}>
            Chat global ini akan di refresh setiap hari. Tenang aja kamu gratis
            dan bebas menggunakan fitur ini
          </Text>
        </View>
      </View>
      <View style={styles.komentar}>
        <View style={styles.cord}>
          <TextInput style={styles.input} placeholder="Ngobrol gayeng ..." />
          <TouchableOpacity>
            <Chat
              style={{marginRight: 10}}
              width={16}
              height={16}
              fill="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.first,
    height: 60,
    flexDirection: 'row',
    padding: 4,
  },
  komentar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cord: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 0.6,
    borderColor: '#ddd',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    fontSize: 12,
    flex: 1,
    paddingLeft: 10,
    marginRight: 10,
  },
});
