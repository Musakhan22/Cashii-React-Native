/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, Image, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from './appcolors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Itemscontainer = ({image,title,subtitle}) => {
   const [wallets, setWallets] = useState('');

  useEffect(() => {
    fetchAddress();
  },[]);

  const fetchAddress = async () => {
      const address = await AsyncStorage.getItem('walletaddress');
      setWallets(address);
      console.log('DATATAT', wallets);
    };

  const onShare = async (address) => {
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
  return (
   <View style={styles.itemscontainer}>
        <View style={styles.imgcon}>
            <Image source={image} />
        </View>
        <View style={styles.headercon}>
            <View style={styles.topitemcon}>
              <View style={styles.topitems}>
        <Text style={styles.headertxt}>{title}</Text>
        <View style={{width: wp('23%'),height:hp('4%'),flexDirection:"row",alignItems:"center",}}>
            <TouchableOpacity style={{marginHorizontal:wp('3.7%')}} onPress={() => onShare(wallets)}>
        <Image source={require('../assets/images/share.png')} tintColor={'#292D32'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => copyToClipboard(wallets)}>
        <Image source={require('../assets/images/copy.png')} tintColor={'#292D32'}/>
            </TouchableOpacity>

              </View>
        </View>
        <Text style={styles.endtxt}>0.00</Text>
        </View>
        <View style={styles.bottomcon}>
       <Text style={styles.bottomtxt}>{subtitle}</Text>
       <Text style={styles.endtxt1}>≈0.00 USD</Text>
        </View>
        </View>
       </View>
  );
};

export default Itemscontainer;

const styles = StyleSheet.create({
    itemscontainer:{
    width: wp('90%'),
    // height:hp('8%'),
    // borderWidth:2,
    marginTop:hp('2%'),
    marginLeft:wp('2%'),
    flexDirection:'row',
    alignItems:'center',
  },
  imgcon:{
      height: hp('6%'),
    width: wp('14%'),
    backgroundColor:appColors.subgreycon,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:31,
    marginLeft:wp('2%'),
  },
  headercon:{
    width: wp('78%'),
    // borderWidth:2,
  },
  topitems:{
      width: wp('42%'),
    height: hp('4%'),
    // borderWidth:2,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-evenly',
  },
  topitemcon:{
    width: wp('77%'),
    height: hp('4%'),
    // borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:wp('1%'),
  },
  bottomcon:{
     width: wp('76%'),
    height: hp('3%'),
    // borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:wp('1%'),

  },
headertxt:{
    fontFamily:'PoppinsRegular',
    fontSize:20,
    color:appColors.Btnblack,
    textAlign:'center',
    // marginLeft:wp('1%'),
},
bottomtxt:{
     fontFamily:'PoppinsBold',
    fontSize:12,
    color:appColors.subtxt,
    marginLeft:wp('3%'),
},
endtxt:{
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    color:appColors.subtxt,
    textAlign:'center',
    marginRight:wp('3%'),
},
endtxt1:{
    fontFamily:'PoppinsRegular',
    fontSize:12,
    color:appColors.subtxtgry,
    marginRight: wp('3%'),
},
});
