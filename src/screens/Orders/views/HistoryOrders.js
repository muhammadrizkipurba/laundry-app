import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HistoryOrders = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
				<Text>No orders yet</Text>
      </SafeAreaView>
    </View>
  );
};

export default HistoryOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
