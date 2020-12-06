import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { Color } from '../../../assets';
import CustomSliderPreview from './CustomSliderPreview';

const images = [
  {
    banner: require('../../../assets/images/promo-new.jpg'),
    desc: 'Get 50% discount for new customer',
  },
  {
    banner: require('../../../assets/images/promo-bag-shoes.jpg'),
    desc: '10% off to clean your bag and shoes',
  },
  {
    banner: require('../../../assets/images/promo.jpg'),
    desc: 'Special December promo',
  },
  {
    banner: require('../../../assets/images/promo-20.jpg'),
    desc: 'Get 20% off for 50 KG clothes',
  }
];

const LaundryPromo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Special Offers
        </Text>
        <TouchableOpacity>
          <Text style={styles.seeMoreButton}>
            See all promos
          </Text>
        </TouchableOpacity>
      </View>
      <FlatListSlider
        data={images}
        width={275}
        loop={false}
        timer={10000}
        component={<CustomSliderPreview />}
        onPress={item => alert(JSON.stringify(item))}
        indicatorActiveWidth={20}
        contentContainerStyle={{paddingHorizontal: 10}}
      />
    </View>
  );
};

export default LaundryPromo;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
	},
	title: {
    fontSize: 20,
    fontWeight: "600",
    // textAlign: "center"
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between"
  },
  seeMoreButton: {
    fontSize: 13,
    color: Color.mainBlue
  }
});
