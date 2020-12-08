import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const RecentActivity = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
				<Text>Recent Activity</Text>
      </SafeAreaView>
    </View>
  );
};

export default RecentActivity;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: 'center',
		justifyContent: 'center',
	}
});
