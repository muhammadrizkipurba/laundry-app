import React, { Fragment } from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import CouponHighlight from './views/CouponHighlight';
import { Promo } from '../../components/StaticContens';

const PromoScreen = ({ navigation }) => {

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.topSafeArea}/>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={Promo}
          style={{paddingVertical: 12}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CouponHighlight data={item} onPress={() => navigateTo('PromoDetailsScreen')}/>
          )}
        />
      </View>
    </Fragment>
  );
};

export default PromoScreen;

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
		backgroundColor: "#ffffff"
  },
	container: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 20,
	}
})
