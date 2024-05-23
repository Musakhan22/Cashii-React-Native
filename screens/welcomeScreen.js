/* eslint-disable prettier/prettier */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headercon}>
        <Text>Meet the</Text>
        <Text>Future Wallet</Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.maincolor,
  },
  headercon: {
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 2,
    marginTop: hp('5%'),
    width: wp('50%'),
  },
});
