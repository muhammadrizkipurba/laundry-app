import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import { abs } from 'react-native-reanimated';

import { Coin, Color, Logo } from '../../assets';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundTopOuter}>
        <View style={styles.backgroundTopInner}>
          <View style={styles.logoWrapper}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.sloganText}>Fresh Clothes, Fresh Life</Text>
          </View>
        </View>
      </View>
      <View style={styles.backgroundBottomOuter}>
        <View style={styles.backgroundBottomInner}>

        </View>
      </View>
      <View style={styles.middleBox}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Coin height={22} width={22} />
          <Text style={{marginLeft: 10, fontSize: 18, fontWeight: "800"}}>100 points</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const WindowWidth = Dimensions.get('window').width;
// const WindowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundTopOuter: {
    height: "40%",
    backgroundColor: 'white',
  },
  backgroundBottomOuter: {
    height: "60%",
    backgroundColor: Color.blueSky,
  },
  backgroundTopInner: {
    flex: 1,
    backgroundColor: Color.blueSky, 
    borderBottomRightRadius: 80
  },
  backgroundBottomInner: {
    flex: 1,
    backgroundColor: 'white', 
    borderTopLeftRadius: 80
  },
  logoWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 120,
    height: 100,
  },
  sloganText: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "700",
    color: Color.mainBlue
  },
  middleBox: { 
    position: "absolute", 
    flex: 2, 
    alignItems: "center",  
    justifyContent: "center",
    top: '35%', 
    height: 70, 
    width: WindowWidth*0.7,
    backgroundColor: 'white',
    shadowColor: '#d7d7d7',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    },
    marginLeft: WindowWidth*0.155,
    elevation: 3,
    borderRadius: 40
  }
});
