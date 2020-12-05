import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonIcon from '../../../components/ButtonIcon';

const OurServices = () => {

	const onPress = (label) => {
		console.log('Someone Press on ' + label);
	};

  return (
    <View style={styles.container}>
      <Text style={styles.ourServicesTitle}>Our Services</Text>
			<View style={styles.servicesWrapper}>
				<ButtonIcon label="Kilograms" onPress={() => onPress('Kilograms')} name="services" />
				<ButtonIcon label="Pieces" onPress={() => onPress('Pieces')} name="services" />
				<ButtonIcon label="Express" onPress={() => onPress('Express')} name="services" />
				<ButtonIcon label="Blankets" onPress={() => onPress('Blankets')} name="services" />
				<ButtonIcon label="Ironing" onPress={() => onPress('Ironing')} name="services" />
				<ButtonIcon label="VIP" onPress={() => onPress('VIP')} name="services" />
			</View>
    </View>
  );
};

export default OurServices;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		marginBottom: 20
	},
	ourServicesTitle: {
    fontSize: 20,
    fontWeight: "600"
	},
	servicesWrapper: {
		flexDirection: "row",
		justifyContent: 'space-between',
		marginTop: 20,
		flexWrap: 'wrap'
	}
});