import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
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

const ShowSecretPhraseScreen = () => {
  const DATA = [
    {id: '0. ', title: 'mean'},
    {id: '1. ', title: 'moral'},
    {id: '2. ', title: 'corals'},
    {id: '3. ', title: 'Champion'},
    {id: '4. ', title: 'busy'},
    {id: '5. ', title: 'measure'},
    {id: '6. ', title: 'veteran'},
    {id: '7. ', title: 'rice'},
    {id: '8. ', title: 'decorate'},
    {id: '9. ', title: 'trash'},
    {id: '10. ', title: 'design'},
    {id: '11. ', title: 'brass'},
  ];
  const navigation = useNavigation();

  const copyToClipboard = () => {
    const data = DATA.map(item => item.title);
    const dataString = data.join(' ');
    if (typeof dataString === 'string') {
      Clipboard.setString(dataString);
      console.log(dataString);
      Alert.alert('Copied to Clipboard');
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
      <Griditems data={DATA} />
      <View style={styles.middlecontainer}>
        <Customiconbutton onPress={copyToClipboard} />
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
