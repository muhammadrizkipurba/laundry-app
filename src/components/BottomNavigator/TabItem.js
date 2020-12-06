import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Color, HomeIcon, OrderIcon, AccountIcon, TipsIcon, RewardsIcon  } from '../../assets';

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {

	const Icon = () => {
		if(label === 'Home') return <HomeIcon height={20} width={20} fill={isFocused ? Color.mainBlue : Color.textInactive} />;
		if(label === 'Orders') return <OrderIcon height={20} width={20} fill={isFocused ? Color.mainBlue : Color.textInactive} />;
		if(label === 'Account') return <AccountIcon height={20} width={20} fill={isFocused ? Color.mainBlue : Color.textInactive} />;
		if(label === 'Tips') return <TipsIcon height={20} width={20} fill={isFocused ? Color.mainBlue : Color.textInactive} />;
		if(label === 'Rewards') return <RewardsIcon height={20} width={20} fill={isFocused ? Color.mainBlue : Color.textInactive} />;
		return <HomeIcon />;
	};

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
    	style={styles.tabNavigation}
    >
			<Icon/>
      <Text style={{ ...styles.tabTitle, color: isFocused ? Color.mainBlue : Color.textInactive, fontWeight: '500' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
	tabNavigation: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTitle: {
		fontFamily: "Helvetica",
		fontSize: 14,
		marginTop: 5,
		textAlign: "center"
	}
});
