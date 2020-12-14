import React, { Fragment } from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Color } from '../../assets';
import CouponCard from './views/CouponCard';
import { Promo } from '../../components/StaticContens';

const PromoScreen = () => {
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
            <CouponCard data={item} onPress={() => console.log(`promo-id-${item.id}`)}/>
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
