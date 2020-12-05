import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import { Logo, Color } from "../../../assets"

const HeaderLogo = () => {
  return (
    <View style={styles.backgroundTopOuter}>
      <View style={styles.backgroundTopInner}>
        <View style={styles.logoWrapper}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.sloganText}>Fresh Clothes, Fresh Life</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
	backgroundTopOuter: {
    height: "30%",
    backgroundColor: 'white',
  },
  backgroundTopInner: {
    flex: 1,
    backgroundColor: Color.blueSky, 
    borderBottomRightRadius: 80
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
});
