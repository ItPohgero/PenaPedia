import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Kampus = ({data}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <View>
          <Text style={{fontWeight: 'bold'}}>
            Pahami dulu yuk, persiapan resepsi
          </Text>
          <Text style={{fontSize: 11}}>mungkin ini alasan kamu kesini</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#ddd',
            paddingVertical: 1,
            paddingHorizontal: 10,
            height: 20,
            borderRadius: 3,
          }}>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10}}>
        {data.map((item, index) => {
          return <Image key={index} source={item.img} style={styles.img} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Kampus;

const styles = StyleSheet.create({
  img: {height: 100, width: 200, borderRadius: 10, marginHorizontal: 5},
});
