import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

const CustomSliderPreview = ({style, item, imageKey, onPress, index, active, local }) => {
  return (
    <TouchableOpacity
      style={[styles.videoContainer]}
      onPress={() => onPress(item)}
		>
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image
          style={[styles.videoPreview, active ? {} : {height: 120}]}
          source={item.banner}
        />
      </View>
      <Text style={styles.desc}>{item.desc}</Text>
    </TouchableOpacity>
  );
};

export default CustomSliderPreview;

const styles = StyleSheet.create({
	videoContainer: {
    width: 275,
    paddingVertical: 28,
    justifyContent: 'center',
    marginRight: 20,
  },
  videoPreview: {
    width: 275,
    height: 155,
    borderRadius: 25,
		resizeMode: 'cover',
  },
  desc: {
		fontSize: 15,
		fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});