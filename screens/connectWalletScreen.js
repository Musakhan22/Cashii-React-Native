import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';
import Walletselectorbutton from '../components/walletselectorbutton';

const ConnectWalletScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>Create Your</Text>
        <Text style={styles.headertext}>Wallet</Text>
      </View>
      <View style={{marginTop: hp('14%')}}>
        <Walletselectorbutton
          onpress={() => navigation.navigate('createPassword')}
          icon={'add-outline'}
          text={"I don't have a wallet"}
          footertext={'Create a new multi-chain wallet.'}
          backgroundcolor={appColors.Btnblack}
          textcolor={appColors.maincolor}
          footerclr={appColors.txtgrey}
        />
      </View>
      <View style={{marginTop: hp('4%')}}>
        <Walletselectorbutton
          onpress={null}
          icon={'arrow-down'}
          text={'I already have a wallet'}
          footertext={'Import a wallet.'}
          backgroundcolor={appColors.Btnblack}
          textcolor={appColors.maincolor}
          footerclr={appColors.txtgrey}
        />
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
