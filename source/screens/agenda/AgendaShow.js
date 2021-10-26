import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Share,
  ScrollView,
  TextInput,
} from 'react-native';
import Link from '../../assets/logoSvg/link.svg';
import User from '../../assets/logoSvg/user.svg';
import Like from '../../assets/logoSvg/like.svg';
import Komentar from '../../assets/logoSvg/komentar.svg';
import Shared from '../../assets/logoSvg/share.svg';
import Whatsapp from '../../assets/logoSvg/whatsapp.svg';
import Alarm from '../../assets/logoSvg/agenda.svg';
import Color from '../../utils/Color';
import Home from '../../assets/logoSvg/home.svg';
import Chat from '../../assets/logoSvg/paper-plane.svg';

const AgendaShow = ({navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Lorem ipsum dolor sit amet.',
        message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima quam dicta neque harum, sequi quos sunt delectus consequatur laborum.',
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={{marginBottom: 50}}>
        <ScrollView style={styles.box}>
          <View style={styles.header}>
            <View style={styles.profile}>
              <User width={25} height={25} fill="gray" />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('AgendaShow')}
              style={styles.title}>
              <Text style={{fontWeight: 'bold', fontSize: 13}}>PAC IPNU Magetan</Text>
              <Text style={{fontSize: 10}}>Posted 12 Agustus 2021</Text>
              <Text style={{fontSize: 10, color: 'green'}}>Terbuka untuk umum</Text>
            </TouchableOpacity>
            <View style={styles.link}>
              <TouchableOpacity>
                <Link width={16} height={16} fill="gray" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
            <Image
              source={require('../../assets/image/slide/3.png')}
              style={styles.img}
            />
            <Text style={{fontSize: 13, textAlign: 'justify'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, officia? Quod modi veniam iste quos itaque aliquam
              voluptate adipisci facere vero voluptatem sit animi in inventore,
              fuga eos est non reiciendis! Ullam fuga quia saepe reiciendis
              numquam. Corporis ipsum sunt nam voluptates, et amet enim esse
              voluptatem atque? Adipisci, possimus consequatur provident illo
              expedita architecto numquam, facere ab, nisi nobis nemo doloribus
              et dicta beatae deserunt molestiae accusamus quam repellendus?
              Harum eius ipsa maxime ea at suscipit minus recusandae nesciunt?
              Culpa necessitatibus voluptate aperiam! Totam officia facere
              placeat. Aliquid suscipit dolorem ullam. Animi architecto
              excepturi tempore magni nemo, cupiditate non? Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Dolor veniam similique
              porro, voluptate expedita cum, dolorum eveniet magni voluptas ea
              perspiciatis quis laborum ab fugit repellendus vitae illo
              eligendi, nisi quibusdam alias dicta suscipit. Quisquam, veritatis
            </Text>
          </View>
          <View style={{marginBottom: 50}}>
            <Text style={{fontSize: 11}}>
              213 Suka - 23 Komentar - 123 Shared
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginTop: 6, flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Like width={16} height={16} fill="red" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Komentar
                    width={16}
                    height={16}
                    style={{marginLeft: 20}}
                    fill="gray"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onShare}>
                  <Shared
                    width={16}
                    height={16}
                    style={{marginLeft: 20}}
                    fill="gray"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Whatsapp
                    width={16}
                    height={16}
                    style={{marginLeft: 20}}
                    fill="gray"
                  />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 10}}>Pelaksanaan</Text>
                  <Text style={{fontSize: 10}}>12 Agustus 2021</Text>
                </View>
                <TouchableOpacity>
                  <Alarm
                    width={16}
                    height={16}
                    style={{marginLeft: 20}}
                    fill="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('agenda')}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Color.first, borderTopRightRadius: 10, marginRight: 5}}>
          <Home widht={15} height={15} fill="white" />
        </TouchableOpacity>
        <View style={{flex: 10, justifyContent: 'center'}}>
          <View style={styles.cord}>
            <TextInput style={styles.input} placeholder="Komentar ..." />
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
    </View>
  );
};

export default AgendaShow;

const styles = StyleSheet.create({
  box: {
    padding: 20,
    paddingTop: 5,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  profile: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {flex: 1, height: 50, justifyContent: 'center'},
  link: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  content: {
    paddingTop: 10,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginBottom: 10
  },
  img: {width: '100%', height: 140, borderRadius: 10, marginBottom: 10},
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    paddingRight: 10,
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
  komentar: {
    padding: 10,
  },
});
