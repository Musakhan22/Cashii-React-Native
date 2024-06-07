import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Backbutton from '../../components/backbutton';
import appColors from '../../components/appcolors';

const Userslist = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>Chat</Text>
      </View>
    </View>
  );
};

export default Userslist;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'flex-start',
    color: appColors.manclrwhite,
  },
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    marginLeft: wp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
});
