import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Color from '../../utils/Color';
import PenaPedia from '../../assets/pena-active.svg';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: -50}}>
        <PenaPedia width={50} height={50} />
        <Text style={{marginBottom: 20, marginTop: 5}}>LOGIN APLIKASI</Text>
        <TextInput placeholder="Email atau No Whatsapp" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
        <Text>Lupa password? Here</Text>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('BottomTabNavigator')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 150,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text> Are you have account?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomVersion}>
          <Text style={{fontSize: 12}}>Versi 1.1</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bottom: {
    width: Dimensions.get('screen').width,
    height: 80,
    backgroundColor: Color.first,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
  },
  bottomVersion: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 50,
    width: Dimensions.get('screen').width - 120,
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  input: {
    borderWidth: 0.7,
    borderColor: '#aaa',
    width: '80%',
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Color.first,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 5,
  },
});
