import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Content, Header} from './components';
import Color from '../../utils/Color';

const AgendaScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView>
        <Content
          navigation={navigation}
          title="PC IPNU dan IPPNU Magetan"
          target="Terbuka untuk umum"
          created_at="12 September 2021"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sint tempore accusantium expedita beatae eius ad voluptatum recusandae eos itaque."
          image={require('../../assets/image/slide/3.png')}
          suka={47}
          komentar={23}
          shared={17}
        />
        <Content
          navigation={navigation}
          title="PC IPNU dan IPPNU Magetan"
          target="Terbuka untuk umum"
          created_at="12 September 2021"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sint tempore accusantium expedita beatae eius ad voluptatum recusandae eos itaque."
          image={require('../../assets/image/slide/3.png')}
          suka={47}
          komentar={23}
          shared={17}
        />
        <Content
          navigation={navigation}
          title="PC IPNU dan IPPNU Magetan"
          target="Terbuka untuk umum"
          created_at="12 September 2021"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sint tempore accusantium expedita beatae eius ad voluptatum recusandae eos itaque."
          image={require('../../assets/image/slide/3.png')}
          suka={47}
          komentar={23}
          shared={17}
        />
        <View style={{marginBottom: 100}} />
      </ScrollView>
    </View>
  );
};

export default AgendaScreen;

const styles = StyleSheet.create({});
