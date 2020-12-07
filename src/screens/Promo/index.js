import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PromoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Promo Screen</Text>
    </View>
  );
};

export default PromoScreen;

const styles = StyleSheet.create({
	container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: "center"
	}
})
