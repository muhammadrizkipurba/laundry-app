import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const RecentOrders = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text>No orders</Text>
      </SafeAreaView>
    </View>
  );
};

export default RecentOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
