import React from 'react';
import moment from 'moment';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';

const CouponHighlight = ({ data, onPress }) => {

	const expiry_date = moment(data.expired, "DD/MM/YYYY").format("DD MMM YYYY");
	
  return (
		<View style={styles.wrapper}>
			<TouchableOpacity onPress={onPress} style={styles.card}>
				<Image source={data.banner} style={styles.banner} />
				<View style={styles.cardFooter}>
					<Text style={{...styles.footerText, fontWeight: "700"}}>
						{data.pieces} {data.pieces > 1 ? 'Vouchers' : 'Voucher'}
					</Text>
					{ data.expired ? 
						<View style={{flexDirection: "row", alignItem: 'center'}}>
							<Text style={{...styles.footerText, marginRight: 5}}>
								Expired at 
							</Text>
							<Text style={{...styles.footerText, fontWeight: "700"}}>
								{expiry_date}
							</Text>
						</View>
						: <Text style={{...styles.footerText, fontWeight: "700"}}>
							No expiry date
						</Text>
					}
				</View>
			</TouchableOpacity>
		</View>
  );
};

export default CouponHighlight;

const styles = StyleSheet.create({
	wrapper: {

	},
	card: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
		backgroundColor: 'transparent',
  },
  banner: {
    width: "100%",
    height: 200,
    resizeMode: 'cover'
	},
	cardFooter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
		borderWidth: 1,
		borderColor: "#d7d7d7",
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8
	},
	footerText: {
		fontSize: 16,
		color: "#1a1a1a"
	}
});