import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';
import Backbutton from '../components/backbutton';
import Custombutton from '../components/custombutton';

const WalletCreationScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.successCon}>
        <Image source={require('../assets/images/confirm.png')} />
      </View>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>Wallet Created</Text>
      </View>
      <View style={styles.subtitlecon}>
        <Text style={styles.subtitletext}>
          Send & receive crypto instantly cause
        </Text>
        <Text style={styles.subtitletext}>Cashii got your back.</Text>
      </View>
      <View style={{marginTop: hp('30%')}}>
        <Custombutton
          text={'Get Started'}
          color={appColors.Btnblack}
          textclr={appColors.maincolor}
          onpress={() => navigation.navigate('Tabs')}
        />
      </View>
    </SafeAreaView>
  );
};

export default WalletCreationScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.maincolor,
  },
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    marginRight: wp('14%'),
  },
  headercon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('2%'),
    width: wp('88%'),
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
  successCon: {
    height: hp('13%'),
    width: wp('28%'),
    marginTop: hp('20%'),
    borderWidth: 6,
    borderColor: appColors.txtgrey,
    backgroundColor: appColors.Btnblack,
    borderRadius: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
