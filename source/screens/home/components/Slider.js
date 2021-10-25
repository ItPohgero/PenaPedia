import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Color from '../../../utils/Color';

const dataSlideImages = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../../../assets/image/slide/1.png'),
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('../../../assets/image/slide/2.png'),
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: require('../../../assets/image/slide/3.png'),
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../../../assets/image/slide/4.png'),
  },
];
const {width: screenWidth} = Dimensions.get('window');

const Slider = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    setEntries(dataSlideImages);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <>
        <View style={styles.item}>
          <ParallaxImage
            source={item.illustration}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.1}
            {...parallaxProps}
          />
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={2}>
            {item.subtitle}
          </Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        firstItem={1}
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 160}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        onSnapToItem={index => setActive(index)}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          {dataSlideImages.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.indicator,
                  {
                    backgroundColor: active == index ? '#07A3BC' : '#ccc',
                    width: active == index ? 30 : 10,
                  },
                ]}></View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  item: {
    width: screenWidth - 160,
    height: screenWidth - 220,
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontSize: 12,
    color: Color.first,
    fontWeight: 'bold'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 10,
  },
  indicator: {
    height: 5,
    borderRadius: 10,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
