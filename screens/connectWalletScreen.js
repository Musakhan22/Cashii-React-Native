/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';

const ConnectWalletScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>Create Your</Text>
        <Text style={styles.headertext}>Wallet</Text>
      </View>
      
    </SafeAreaView>
  );
};

export default ConnectWalletScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.maincolor,
  },
  headercon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('10%'),
    width: wp('70%'),
  },
  headertext: {
    fontSize: 48,
    fontFamily: 'ManropeExtraBold',
    color: appColors.txtblack,
  },
});
