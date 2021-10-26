import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Share
} from 'react-native';
import Link from '../../../assets/logoSvg/link.svg';
import User from '../../../assets/logoSvg/user.svg';
import Like from '../../../assets/logoSvg/like.svg';
import Komentar from '../../../assets/logoSvg/komentar.svg';
import Shared from '../../../assets/logoSvg/share.svg';
import Whatsapp from '../../../assets/logoSvg/whatsapp.svg';
import Alarm from '../../../assets/logoSvg/agenda.svg';

const Content = ({navigation, title, target, created_at, content, image, suka, komentar, shared}) => {
      const onShare = async () => {
        try {
          const result = await Share.share({
            title: title,
            message: content,
          });
        } catch (error) {
          alert(error.message);
        }
      };
    return (
      <View style={styles.box}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <User width={25} height={25} fill="gray" />
          </View>
          <TouchableOpacity style={styles.title}>
            <Text style={{fontWeight: 'bold', fontSize: 13}}>{title}</Text>
            <Text style={{fontSize: 10}}>Posted {created_at}</Text>
            <Text style={{fontSize: 10, color: 'green'}}>{target}</Text>
          </TouchableOpacity>
          <View style={styles.link}>
            <TouchableOpacity>
              <Link width={16} height={16} fill="gray" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AgendaShow')}
          style={styles.content}>
          <Text style={{fontSize: 13, textAlign: 'justify'}}>{content}</Text>
          <Image source={image} style={styles.img} />
        </TouchableOpacity>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 11}}>
            {suka} Suka - {komentar} Komentar - {shared} Shared
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginTop: 6, flexDirection: 'row'}}>
              <TouchableOpacity>
                <Like width={16} height={16} fill="gray" />
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
      </View>
    );
}

export default Content

const styles = StyleSheet.create({
  box: {
    margin: 10,
    padding: 10,
    paddingTop: 5,
    backgroundColor: '#eee',
    elevation: 3,
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
    paddingBottom: 10,
  },
  img: {width: '100%', height: 140, borderRadius: 10, marginTop: 10},
});
