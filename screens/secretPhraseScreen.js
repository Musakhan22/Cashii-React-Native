import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';
import Backbutton from '../components/backbutton';
import Griditems from '../components/griditems';
import Customiconbutton from '../components/customiconbutton';

const SecretPhraseScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
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
      <Griditems />
      <View style={styles.footercontainer}>
        <Customiconbutton />
        <Text>Copy</Text>
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
  footercontainer: {
    width: wp('60%'),
    alignItems: 'center',
    borderWidth: 2,
    marginTop: hp('4%'),
    flexDirection: 'row',
  },
});
