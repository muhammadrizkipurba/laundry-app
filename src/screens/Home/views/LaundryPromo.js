import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { Color } from '../../../assets';
import { Promo } from '../../../components/StaticContens'
import CustomSliderPreview from './CustomSliderPreview';

const LaundryPromo = ({ navigation }) => {

  const navigateTo = (screen) => {
    navigation.navigate(screen)
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Special Offers
        </Text>
        <TouchableOpacity onPress={() => navigateTo('Promo')}>
          <Text style={styles.seeMoreButton}>
            See all promos
          </Text>
        </TouchableOpacity>
      </View>
      <FlatListSlider
        data={Promo}
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
