import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Color } from '../../../assets';

import { Tips } from '../../../components/StaticContens';
import TipsCard from './TipsCard';

const LaundryTips = () => {
	
	const navigateTo = (id) => {
		console.log(`Tips with id : ${id} just clicked!`)
	};

	const TipsCardRender = Tips.map((data, idx) => {
		if(idx < 4) {
			return (
				<TipsCard key={`tips-${idx+1}`} data={data} idx={idx} onPress={() => navigateTo(data.id)} />
			)
		};
		return null;
	});

	return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Laundry Tips
        </Text>
        <TouchableOpacity>
          <Text style={styles.seeMoreButton}>
            See more tips
          </Text>
        </TouchableOpacity>
      </View>
			<View style={styles.tipsListWrapper}>
				{TipsCardRender}
			</View>
    </View>
  );
};

export default LaundryTips;

const styles = StyleSheet.create({
	titleWrapper: {
		paddingHorizontal: 10,
		marginBottom: 20,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between"
  },
  seeMoreButton: {
    fontSize: 13,
    color: Color.mainBlue
  },
	title: {
		fontSize: 20,
		fontWeight: "600"
	},
	tipsListWrapper: {
		flex: 1,
	}
});
