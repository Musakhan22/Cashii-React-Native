import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Textinput from '../../components/textinput';

const CreatePasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <View style={{height: hp('4%')}} />
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>Create</Text>
        <Text style={styles.headertext}>Passcode</Text>
      </View>
      <View style={styles.subtitlecon}>
        <Text style={styles.subtitletext}>
          Adds an extra layer of security when using
        </Text>
        <Text style={styles.subtitletext}>the app.</Text>
      </View>
      <Textinput navigate={'confirmPasscode'} />
    </SafeAreaView>
  );
};

export default CreatePasswordScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.maincolor,
  },
  headercon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('7%'),
    width: wp('70%'),
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
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    marginRight: wp('14%'),
  },
});
