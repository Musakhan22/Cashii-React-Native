import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {PinInput} from '@pakenfit/react-native-pin-input';

import appColors from '../components/appcolors';
import Backbutton from '../components/backbutton';

const CreatePasswordScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.backbuttoncon}>
        <Backbutton />
      </View>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>Create</Text>
        <Text style={styles.headertext}>Passcode</Text>
      </View>
      <View style={styles.subtitlecon}>
        <Text style={styles.subtitletext}>
          Adds an extra layer of security when using
        </Text>
        <Text style={styles.subtitletext}>the app.</Text>
      </View>
      <View>
        <PinInput length={6} onFillEnded={otp => console.log(otp)} />;
      </View>
    </SafeAreaView>
  );
};

export default CreatePasswordScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.maincolor,
  },
  headercon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('7%'),
    width: wp('70%'),
  },
  headertext: {
    fontSize: 48,
    fontFamily: 'ManropeExtraBold',
    color: appColors.txtblack,
  },
  subtitlecon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('1%'),
  },
  subtitletext: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    color: appColors.subtxt,
  },
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    marginRight: wp('14%'),
  },
});
