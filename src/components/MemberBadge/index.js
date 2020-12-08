import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { BadgeIcon, Color } from '../../assets'

const MemberBadge = ({ memberLevel, fontSize }) => {
	
	const Icon = () => {
		return (
			<BadgeIcon 
				width={fontSize}
				height={fontSize}
				fill={memberLevel === 'Silver' ? "#9e9e9e" : "#ffffff"}
			/>
		)
	}
	
	return (
    <View style={styles.container(memberLevel)}>
      <Icon />
			<Text style={styles.label(memberLevel, fontSize)}>{memberLevel} member</Text>
    </View>
  );
};

export default MemberBadge;

const styles = StyleSheet.create({
	container: memberLevel => ({
		backgroundColor: memberLevel === 'Gold' ? Color.gold : memberLevel === 'Silver' ? Color.silver : Color.bronze,
		flexDirection: "row",
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 20,
		shadowColor: memberLevel === 'Silver' ? '#000000' : '#aeaeae',
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 0
    },
	}),
	label: (memberLevel, fontSize) => ({
		color: memberLevel === 'Silver' ? "#9e9e9e" : "#ffffff",
		fontSize,
		fontWeight: "700",
		paddingLeft: 8
	})
});