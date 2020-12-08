import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { Color, NotificationIcon } from '../../../assets';

const HeaderNotificationButton = ({ onPress, unReadNotification }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
		<NotificationIcon width={25} height={25} fill={Color.mainBlue} />
		{ unReadNotification ? 
			<View style={styles.alert}></View>
		: null }
	</TouchableOpacity>
  );
};

export default HeaderNotificationButton;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 35
	},
	alert: {
		position: 'absolute',
		right: 0,
		top: 1,
		backgroundColor: "red",
		borderRadius: 50,
		height: 10,
		width: 10
	}
});