import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Backbutton from '../../components/backbutton';
import Griditems from '../../components/griditems';
import Customiconbutton from '../../components/customiconbutton';
import Warningtext from '../../components/warningtext';
import Custombutton from '../../components/custombutton';
import appColors from '../../components/appcolors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShowSecretPhraseScreen = () => {
  const navigation = useNavigation();

  const [unshuffleddata, setUnshuffleddata] = useState('            ');
  const fetchPassword = async () => {
    const mnemonic = await AsyncStorage.getItem('mnemonic');
    setUnshuffleddata(mnemonic.split(' '));
    console.log('DATATAT', mnemonic);
  };
  useEffect(() => {
    fetchPassword();
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

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>Send Payment</Text>
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
      <Griditems data={unshuffleddata} />
      <View style={styles.middlecontainer}>
        <Customiconbutton onPress={() => copyToClipboard(unshuffleddata)} />
        <Text>Copy</Text>
      </View>
      <View style={styles.footercontainer}>
        <Warningtext />
      </View>
      <View style={{marginTop: hp('1%')}}>
        <Custombutton
          text={'Close'}
          color={appColors.Btnblack}
          textclr={appColors.maincolor}
          onpress={() => navigation.navigate('Settings')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShowSecretPhraseScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.maincolor,
  },
  backbuttoncon: {
    width: wp('70%'),
    marginTop: hp('4%'),
    marginRight: wp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
  headercon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('3%'),
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
