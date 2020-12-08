import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Color, SettingsIcon } from '../../../assets';

const HeaderSettingsButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
			<SettingsIcon width={25} height={25} fill={Color.mainBlue} />
		</TouchableOpacity>
  );
};

export default HeaderSettingsButton;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 35
	}
});