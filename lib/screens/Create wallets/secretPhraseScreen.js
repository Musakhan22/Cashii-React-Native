import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ethers} from 'ethers';
import Clipboard from '@react-native-clipboard/clipboard';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Griditems from '../../components/griditems';
import Customiconbutton from '../../components/customiconbutton';
import Warningtext from '../../components/warningtext';
import Custombutton from '../../components/custombutton';
import cryptoWallet from '../../Auth/Address/ethwallet.ts';
import {storeData} from '../../Storage/asyncstorage.js';

const SecretPhraseScreen = () => {
  const navigation = useNavigation();

  const [wallets, setWallets] = useState('');
  const [mnemonics, setMnemonic] = useState('            ');
  const [shufflemnemonics, setshuffledMnemonic] = useState('            ');

  useEffect(() => {
    cryptoWallet.createCryptoWallet().then(res => {
      console.log('MNEMONICS', res.mnemonic);
      console.log('MNEMONICS', res.wallet.address);
      console.log('MNEMONICS', res.wallet.privatekey);
      setMnemonic(res.mnemonic.split(' '));
      setshuffledMnemonic(res.mnemonic.split(' '));
      setWallets(res.wallet.address);
      storeData('publickey', res.wallet.address);
      storeData('privatekey', res.wallet.privatekey);
    });
  }, []);
  const copyToClipboard = mnemonic => {
    if (Array.isArray(mnemonic)) {
      const dataString = mnemonic.join(' ');
      console.log('DATASTRING', dataString);

      Clipboard.setString(dataString);
      console.log('COPY', dataString);
      // Alert.alert('Copied to Clipboard');
    } else {
      Alert.alert('Error', 'Failed to copy to clipboard');
    }
  };

  console.log('dlkddkdkdkd', mnemonics);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledArray = shuffleArray(shufflemnemonics);
  console.log('Shuffled Mnemonics:', shuffledArray);

  return (
    <SafeAreaView style={styles.main}>
      <View style={{height: hp('4%')}} />
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>Secret Phrase</Text>
      </View>
      <View style={styles.subtitlecon}>
        <Text style={styles.subtitletext}>
          Save your 12 word phrase into a safe place{' '}
        </Text>
        <Text style={styles.subtitletext}> on your own.</Text>
      </View>
      {mnemonics && <Griditems data={mnemonics} />}
      <View style={styles.middlecontainer}>
        <Customiconbutton onPress={() => copyToClipboard(mnemonics)} />
        <Text>Copy</Text>
      </View>
      <View style={styles.footercontainer}>
        <Warningtext />
      </View>
      <View style={{marginTop: hp('1%')}}>
        <Custombutton
          text={'Continue'}
          color={appColors.Btnblack}
          textclr={appColors.maincolor}
          onpress={() => {
            navigation.navigate('confirmSecretPassword', {data: shuffledArray});
            storeData('walletaddress', wallets);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SecretPhraseScreen;

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
    marginTop: hp('7%'),
    width: wp('85%'),
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
  middlecontainer: {
    width: wp('60%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2%'),
    flexDirection: 'row',
  },
  footercontainer: {
    flexDirection: 'row',
    width: wp('85%'),
    alignItems: 'center',
    marginTop: hp('3%'),
  },
});
