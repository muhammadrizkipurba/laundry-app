import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';

import { Coin, CouponIcon, Color } from '../../../assets';

const PointsInformation = () => {
  
  const onPressRewards = () => {
    console.log('reward button press')
  };

  return (
    <View style={styles.middleBox}>
      <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Coin height={22} width={22} />
          <Text style={{marginLeft: 10, fontSize: 18, fontWeight: "800"}}>100 points</Text>
        </View>
        <TouchableOpacity onPress={onPressRewards}>
          <View style={styles.redeemBackground}>
            <CouponIcon height={30} width={30} resizeMode="contain" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PointsInformation;

const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  middleBox: { 
    position: "absolute", 
    flex: 2, 
    // alignItems: "center",  
    paddingLeft: 23,
    paddingRight: 10,
    justifyContent: "center",
    top: '25%', 
    height: 70, 
    width: WindowWidth*0.9,
    backgroundColor: 'white',
    shadowColor: '#d7d7d7',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    },
    marginLeft: WindowWidth*0.05,
    elevation: 3,
    borderRadius: 40
  },
  redeemBackground: {
    backgroundColor: "#ebf0f5",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: "row"
  }
});
