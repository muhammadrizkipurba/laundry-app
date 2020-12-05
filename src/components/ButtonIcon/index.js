import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { 
	Color,
	WeightScaleIcon,
	PiecesIcon,
	VipServiceIcon,
	BlanketIcon,
	IronIcon,
	ExpressIcon
} from '../../assets';

const ButtonIcon = ({ label, onPress, name }) => {

	const Icon = () => {
		if(label === 'Kilograms') return <WeightScaleIcon height={50} width={50} />;
		if(label === 'Pieces') return <PiecesIcon height={50} width={50} />;
		if(label === 'Express') return <ExpressIcon height={50} width={50} />;
		if(label === 'Blankets') return <BlanketIcon height={50} width={50} />;
		if(label === 'Ironing') return <IronIcon height={50} width={50} />;
		if(label === 'VIP') return <VipServiceIcon height={50} width={50} />;
		return null;
	};

  return (
    <TouchableOpacity onPress={onPress} style={{ marginBottom: 24 }}>
			<View style={styles.button(name)}>
				<Icon />			
			</View>
			<Text style={styles.buttonLabel}>{label}</Text>
		</TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
	button: (name) => ({
		backgroundColor: Color.blueSky,
		padding: name === 'services' ? 20 : 7,
		borderRadius: 20
	}),
	buttonLabel: {
		fontSize: 15,
		textAlign: "center",
		marginTop: 8
	}
});
