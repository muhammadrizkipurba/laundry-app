import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import {  } from 'react-native-gesture-handler';
import { Coin, Color, FaqIcon, IonRightIcon, MyPointsIcon, MyRewardsIcon, MyVouchersIcon, PrivacyPolicyIcon, TermsAndConditionsIcon } from '../../../assets';
import ProfilePicture from './ProfilePicture';

const MainContent = ({ navigation }) => {

  const onSignOut = () => {
    navigation.replace('LoginScreen');
  };
  
  const navigateTo = (value) => {
    console.log(value)
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: Color.blueSky, bottom: 10}}>
				<ScrollView showsVerticalScrollIndicator={false} >
          <ProfilePicture />
          <View style={styles.backgroundBottomOuter}>
            <View style={styles.backgroundBottomInner}>
              {/* ACCOUNT INFO */}
              <View style={{ marginBottom: 50 }}>
                <Text style={styles.rewardsTitle}>Account info</Text>
                <View style={styles.touchableList}>
                  <View style={styles.flexRow}>
                    <MyPointsIcon width={20} height={20} fill="" />
                    <Text style={styles.labelList}>Point</Text>
                  </View>
                  <View style={styles.flexRow}>
                    <Coin width={20} height={20} fill="" />
                    <Text style={{...styles.labelList, marginLeft: 10}}>100</Text>
                  </View>
                </View>
                <View style={styles.separateLine} />
                <TouchableOpacity onPress={() => navigateTo('rewards')} style={styles.touchableList}>
                  <View style={styles.flexRow}>
                    <MyRewardsIcon width={20} height={20} fill="" />
                    <Text style={styles.labelList}>Rewards</Text>
                  </View>
                  <IonRightIcon width={15} height={15} fill="#898989" />
                </TouchableOpacity>
                <View style={styles.separateLine} />
                <TouchableOpacity onPress={() => navigateTo('vouchers')} style={styles.touchableList}>
                  <View style={styles.flexRow}>
                    <MyVouchersIcon width={20} height={20} fill="" />
                    <Text style={styles.labelList}>Vouchers</Text>
                  </View>
                  <View style={styles.flexRow}>
                    <Text style={styles.tinyInfo}>3 vouchers</Text>
                    <IonRightIcon width={15} height={15} fill="#898989" />
                  </View>
                </TouchableOpacity>
              </View>
              {/* ACCOUNT INFO */}
              <View style={{marginBottom: 50}}>
                <Text style={styles.rewardsTitle}>Help center</Text>
                <TouchableOpacity onPress={() => navigateTo('faq')} style={styles.touchableList}>
                  <View style={styles.flexRow}>
                    <FaqIcon width={20} height={20} fill="" />
                    <Text style={styles.labelList}>FAQ</Text>
                  </View>
                  <IonRightIcon width={15} height={15} fill="#898989" />
                </TouchableOpacity>
                <View style={styles.separateLine} />
                <TouchableOpacity onPress={() => navigateTo('terms_and_conditions')} style={styles.touchableList}>
                  <View style={styles.flexRow}>
                    <TermsAndConditionsIcon width={20} height={20} fill="" />
                    <Text style={styles.labelList}>Terms and Conditions</Text>
                  </View>
                  <IonRightIcon width={15} height={15} fill="#898989" />
                </TouchableOpacity>
                <View style={styles.separateLine} />
                <TouchableOpacity onPress={() => navigateTo('privacy_policy')} style={styles.touchableList}>
                  <View style={styles.flexRow}>
                    <PrivacyPolicyIcon width={20} height={20} fill="" />
                    <Text style={styles.labelList}>Privacy policy</Text>
                  </View>
                  <IonRightIcon width={15} height={15} fill="#898989" />
                </TouchableOpacity>
              </View>
              <View style={{...styles.flexRow, paddingHorizontal: 10, marginBottom: 20, justifyContent: "space-between"}}>
                <Text style={styles.appVersionLabel}>Version 1.0.0</Text>
                <Text style={styles.appVersionLabel}>#FreshClothesFreshLife</Text>
              </View>
              <TouchableOpacity onPress={() => onSignOut()} style={styles.signoutButton}>
                <Text style={styles.signoutLabel}>Sign out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  flexRow: {flexDirection: "row", alignItems: 'center'},
  backgroundBottomOuter: {
    height: "100%",
    backgroundColor: Color.blueSky,
  },
  backgroundBottomInner: {
    flex: 1,
    backgroundColor: '#ffffff', 
    borderTopLeftRadius: 80,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  rewardsTitle: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 20
  },
  touchableList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    // paddingHorizontal: 14
  },
  labelList: {
    fontSize: 16,
    marginLeft: 8,
    color: "#898989",
    fontWeight: '500'
  },
  separateLine: {
    borderBottomWidth: 1, 
    borderBottomColor: '#e8e8e8', 
    marginVertical: 13,
    borderRadius: 20
  },
  tinyInfo: {
    marginRight: 5,
    fontSize: 12
  },
  signoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.mainBlue,
    paddingVertical: 20,
    borderRadius: 50,
    shadowColor: '#989898',
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: {
      height: 2,
      width: 1
    },
    elevation: 1,
  },
  appVersionLabel: {
    textAlign: "center",
    color: "#808080"
  },
  signoutLabel: {
    color: '#FFFFFF',
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 2
  }
});
