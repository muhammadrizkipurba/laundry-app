import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HistoryActivity = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
				<Text>History Activity</Text>
      </SafeAreaView>
    </View>
  );
};

export default HistoryActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
