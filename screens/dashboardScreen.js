import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.topcontainer}>
        <View style={styles.textcon}>
          <Text style={styles.headertxt}>Total Balance (USD)</Text>
          <Text style={styles.subtitletxt}>$ 12.50</Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.maincolor,
  },
  topcontainer: {
    height: hp('17%'),
    width: wp('80%'),
    borderRadius: 16,
    backgroundColor: appColors.maingreen,
    marginTop: hp('3%'),
    alignItems: 'flex-start',
  },
  textcon: {
    marginTop: hp('3%'),
    marginLeft: wp('2%'),
  },
  headertxt: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
    color: appColors.subtxt,
  },
  subtitletxt: {
    fontSize: 48,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.subtxt,
  },
});
