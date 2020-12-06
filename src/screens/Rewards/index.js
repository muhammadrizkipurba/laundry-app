import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RewardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Rewards Screen</Text>
    </View>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
	container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: "center"
	}
})
