import {Alert, Share, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Custombutton from '../../components/custombutton';

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'xxcss3434s98csmnx8s03mmx98',
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

const copyToClipboard = () => {
  //  const data = DATA.map(item => item.title);
  const dataString = 'xxcss3434s98csmnx8s03mmx98';
  if (typeof dataString === 'string') {
    Clipboard.setString(dataString);
    // console.log(dataString);
    Alert.alert('Copied to Clipboard');
  } else {
    Alert.alert('Error', 'Failed to copy to clipboard');
  }
};

const Walletaddressscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>Wallet Address</Text>
      </View>
      <View style={styles.textcon}>
        <Text style={styles.contoptxt}>Your Wallet Address is here</Text>
      </View>
      <View style={styles.walletadresscon}>
        <Text style={styles.walletadresstxt}>
          xxcss3434s98csmnx8s03mmx98....
        </Text>
      </View>
      <View style={{marginTop: hp('5%')}}>
        <Custombutton
          color={appColors.Btnblack}
          text={'Copy'}
          textclr={appColors.maincolor}
          onpress={copyToClipboard}
        />
      </View>
      <View style={{marginTop: hp('3%')}}>
        <Custombutton
          color={appColors.maincolor}
          text={'Share'}
          textclr={appColors.Btnblack}
          onpress={onShare}
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
    fontSize: 14,
    fontFamily: 'PoppinsRegular',
    color: appColors.subtxt,
    textAlign: 'center',
  },
});
