import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import { Color, DefaultAvatar } from "../../../assets"
import { MemberBadge } from '../../../components';

const ProfilePicture = () => {
  return (
    <View style={styles.backgroundTopOuter}>
      <View style={styles.backgroundTopInner}>
        <View style={styles.avatarWrapper}>
          <Image source={DefaultAvatar} style={styles.avatar} resizeMode="contain" />
          <Text style={styles.name}>Mhd Rizki Purba</Text>
          <Text style={styles.username}>@muhammadrizkipurba</Text>
          <MemberBadge fontSize={14} memberLevel="Gold" />
        </View>
      </View>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
	backgroundTopOuter: {
    height: 300,
    backgroundColor: 'white',
  },
  backgroundTopInner: {
    flex: 1,
    backgroundColor: Color.blueSky, 
    borderBottomRightRadius: 80
  },
  avatarWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25
  },
  avatar: {
    width: 160,
    height: 140,
  },
  name: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    color: "#000000"
  },
  username: {
    marginTop: 5,
    marginBottom: 20,
    color: "#757575"
  },
});
