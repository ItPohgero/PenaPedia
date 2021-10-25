import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ImgLogo from './ImgLogo';

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={{alignItems: 'center',}}>
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.button}>
              {isFocused ? (
                <View style={styles.active}>
                  <ImgLogo label={label} isFocused={isFocused} />
                  {label != 'home' && (
                    <Text style={styles.textActive}>{label.toUpperCase()}</Text>
                  )}
                </View>
              ) : (
                <View style={styles.notActive}>
                  <ImgLogo label={label} isFocused={isFocused} />
                  {label != 'home' && (
                    <Text style={styles.text}>{label.toUpperCase()}</Text>
                  )}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
  },
  button: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  active: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notActive: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ddd',
    textAlign: 'center',
    fontSize: 9,
    marginTop: 4,
  },
  textActive: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 9,
    marginTop: 4,
  },
});
