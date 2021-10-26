import React, {useState} from 'react';
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
import {Picker} from '@react-native-picker/picker';

const RegisterScreen = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('lk');
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          marginTop: 50,
        }}>
        <PenaPedia width={50} height={50} />
        <Text style={{marginBottom: 20, marginTop: 5}}>REGISTER APLIKASI</Text>
        <TextInput placeholder="Nama Depan" style={styles.input} />
        <TextInput placeholder="Nama Belakang" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="No Whatsapp" style={styles.input} />

        <TextInput placeholder="Jenis Kelamin" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Picker
            selectedValue={selectedValue}
            style={styles.select}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item
              style={{color: '#aaa', fontSize: 15}}
              label="Laki-laki"
              value="lk"
            />
            <Picker.Item
              style={{color: '#aaa', fontSize: 15}}
              label="Perempuan"
              value="pr"
            />
          </Picker>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text> Are you have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.7,
    borderColor: '#aaa',
    width: '80%',
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  select: {
    width: '50%',
    marginLeft: -10
  },
  button: {
    backgroundColor: Color.first,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 5,
  },
});
