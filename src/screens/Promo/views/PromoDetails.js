import React, { Fragment } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const PromoDetails = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Promo Details</Text>
      </View>
      <SafeAreaView style={{backgroundColor: 'transparent'}} />
    </Fragment>
  );
};

export default PromoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
