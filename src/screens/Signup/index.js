import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
				Sign up screen
			</Text>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
