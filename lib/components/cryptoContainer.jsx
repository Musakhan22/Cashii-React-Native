import { StyleSheet, View } from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Itemscontainer from './itemscontainer';

const CryptoContainer = () => {


  return (
    <View style={styles.middleItemcon}>
        <Itemscontainer image={require('../assets/images/bitcoin-1.png')} title={'Bitcoin'} subtitle={'BTC'} />
        <Itemscontainer image={require('../assets/images/usdt-1.png')} title={'USDT'} subtitle={'ERC-20'} />
        <Itemscontainer image={require('../assets/images/eth-1.png')} title={'ETH'} subtitle={'ERC-20'} />
        <Itemscontainer image={require('../assets/images/bnb-1.png')} title={'BNB'} subtitle={'BEP-20'} />
        <Itemscontainer image={require('../assets/images/trx-1.png')} title={'TRX'} subtitle={'TRC-20'} />
    </View>
  );
};

export default CryptoContainer;

const styles = StyleSheet.create({
     middleItemcon: {
    width: wp('96%'),
    height: hp('70%'),
    // borderWidth:2,
    flexDirection: 'column',
    alignItems:'flex-start',
    marginLeft: wp('2%'),
    marginTop: hp('2%'),
  },
});
