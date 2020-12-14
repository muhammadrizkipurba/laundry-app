import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Color } from '../../../assets';

const CouponCard = ({ data, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={data.banner} style={styles.banner} />
      <View style={styles.separateShape}>
        <View style={styles.leftCircle}></View>
        <View style={styles.rightCircle}></View>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.couponTitle}>{data.title}</Text>
      </View>
    </View>
  );
};

export default CouponCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  banner: {
    width: "100%",
    height: 150,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    resizeMode: 'cover'
  },
  separateShape: {
    flex: 1,
    flexDirection: 'row',
    height: 21,
    backgroundColor: '#d4d4d4'
  },
  leftCircle: {
    height: 21,
    width: 30,
    borderRadius: 50,
    position: 'absolute',
    left: -15,
    backgroundColor: '#ffffff'
  },
  rightCircle: {
    height: 21,
    width: 30,
    borderRadius: 50,
    position: 'absolute',
    right: -15,
    backgroundColor: '#ffffff'
  },
  cardBody: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderTopWidth: 0,
    borderColor: "#d4d4d4"
  },
  couponTitle: {
    textAlign: 'center',
    fontSize: 15,
  }
});
