import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';

const Customiconbutton = () => {
  return (
            <View style={styles.iconcontainer}></View>

  );
};

export default Customiconbutton;

const styles = StyleSheet.create({
  iconcontainer:{
    height: hp('3.4%'),
    width: wp('7%'),
    borderWidth:2,
    borderRadius:20,
    backgroundColor:appColors.Btnblack,
    marginHorizontal:hp('2%'),
    alignItems:'center',
  },
});
