/* eslint-disable react-hooks/exhaustive-deps */
import {Alert, Share, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Custombutton from '../../components/custombutton';

const onShare = async address => {
  try {
    const result = await Share.share({
      message: address,
      title: 'Your Wallet Address',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // Shared with activity type of result.activityType
        console.log('Shared with activity type:', result.activityType);
      } else {
        // Shared
        console.log('Shared successfully');
      }
    } else if (result.action === Share.dismissedAction) {
      // Dismissed
      console.log('Share dismissed');
    }
  } catch (error) {
    console.error('Error sharing content:', error.message);
  }
};

const copyToClipboard = address => {
  if (typeof address === 'string') {
    // const dataString = mnemonic.join(' ');
    console.log('DATASTRING', address);

    Clipboard.setString(address);
    console.log('COPY', address);
    // Alert.alert('Copied to Clipboard');
  } else {
    Alert.alert('Error', 'Failed to copy to clipboard');
  }
};
const shortenString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + '...';
};

const shortString = str => {
  if (str.length <= 6) {
    return str; // If the string is too short to shorten, return it as is
  }
  return `${str.substring(0, 4)}...${str.substring(str.length - 5)}`;
};

const Walletaddressscreen = () => {
  const navigation = useNavigation();
  const [wallets, setWallets] = useState('');

  useEffect(() => {
    const fetchAddress = async () => {
      const address = await AsyncStorage.getItem('walletaddress');
      setWallets(address);
      console.log('DATATAT', wallets);
    };
    fetchAddress();
  }, []);

  return (
    <View style={styles.main}>
      <View style={{height: hp('4%')}} />
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>Wallet Address</Text>
      </View>
      <View style={styles.textcon}>
        <Text style={styles.contoptxt}>Your Wallet Address is here</Text>
      </View>
      <View style={styles.walletadresscon}>
        <Text style={styles.walletadresstxt}>{shortString(wallets)}</Text>
      </View>
      <View style={{marginTop: hp('5%')}}>
        <Custombutton
          color={appColors.Btnblack}
          text={'Copy'}
          textclr={appColors.maincolor}
          onpress={() => copyToClipboard(wallets)}
        />
      </View>
      <View style={{marginTop: hp('3%')}}>
        <Custombutton
          color={appColors.maincolor}
          text={'Share'}
          textclr={appColors.Btnblack}
          onpress={() => onShare(wallets)}
        />
      </View>
    </View>
  );
};

export default Walletaddressscreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.manclrwhite,
  },
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    marginRight: wp('12%'),
    alignItems: 'center',
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
  textcon: {
    marginTop: hp('4%'),
    marginBottom: hp('1%'),
    width: wp('75%'),
  },
  contoptxt: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
    color: appColors.subtxt,
  },
  walletadresscon: {
    width: wp('85%'),
    height: hp('6%'),
    marginLeft: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: appColors.maincolor,
  },
  walletadresstxt: {
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    color: appColors.subtxt,
    textAlign: 'center',
  },
});
