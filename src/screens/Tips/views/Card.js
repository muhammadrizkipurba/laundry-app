import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Card = ({data, onPress}) => {
  return (
    <View key={data.id} style={styles.cardContainer}>
			<TouchableOpacity style={styles.card} onPress={onPress}>
					<View style={{ backgroundColor: "#ffffff", borderRadius: 20, overflow: "hidden" }}>
						<View>
							<Image
								source={data.banner}
								style={{
									height: 135,
									width: "100%"
								}}
							/>
						</View>
						<View style={styles.titleWrapper}>
							<Text style={styles.title}>{data.title}</Text>
						</View>
					</View>
			</TouchableOpacity>
		</View>
  );
};

export default Card;

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		overflow: "hidden",
		marginBottom: 10
	},
	card: {
		marginVertical: 8,
		marginHorizontal: 10,
		shadowColor: '#d7d7d7',
    shadowOpacity: 5,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 3,
	},
	bannerWrapper: {
		height: 100,
		flex: 2
	},
	bannerImage: {
		resizeMode: 'contain'
	},
	titleWrapper: { 
		padding: 20, 
		width: "100%" 
	},
	title: {
		fontSize: 14,
		textTransform: 'uppercase',
		textAlign: 'left'
	}
});
