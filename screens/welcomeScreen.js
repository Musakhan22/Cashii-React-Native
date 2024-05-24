import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';
import Custombutton from '../components/custombutton.jsx';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>Meet the</Text>
        <Text style={styles.headertext}>Future Wallet</Text>
      </View>
      <View style={styles.imagecon}>
        <Image source={require('../assets/images/welcome.png')} />
      </View>
      <View style={{marginTop: hp('10%')}}>
        <Custombutton
          text={'Get Started'}
          onpress={() => navigation.navigate('connectWallet')}
          color={appColors.Btnblack}
          textclr={appColors.maincolor}
        />
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
    marginTop: hp('10%'),
    width: wp('85%'),
  },
  headertext: {
    fontSize: 48,
    fontFamily: 'ManropeExtraBold',
    color: appColors.txtblack,
  },
  imagecon: {
    marginTop: hp('18%'),
    alignItems: 'center',
  },
});
