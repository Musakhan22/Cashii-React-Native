import { Image, StyleSheet, Text,  View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import appColors from '../components/appcolors';

const Pointsbutton = ({onPress}) => {
  return (
   <TouchableOpacity style={styles.pointCon} onPress={onPress}>
            <View style={styles.iconcon}>
              <Image source={require('../assets/images/coin.png')} />
              <View style={styles.pointtextcon}>
                <Text style={styles.subtxt1}>Today</Text>
                <Text style={styles.subtxt2}>95P</Text>
              </View>
            </View>
            <View style={styles.subtxt3con}>
              <Text style={styles.subtxt3}>Claim Now</Text>
            </View>
          </TouchableOpacity>
  );
};

export default Pointsbutton;

const styles = StyleSheet.create({
     pointCon: {
    height: hp('12%'),
    width: wp('85%'),
    borderRadius: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: appColors.Btnblack,
  },
  iconcon: {
    marginHorizontal: wp('4%'),
    flexDirection: 'row',
    top: hp('1%'),
  },
  pointtextcon: {
    flexDirection: 'row',
    marginLeft: wp('4%'),
    top: hp('0.6%'),
  },
  subtxt1: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtorg,
  },
  subtxt2: {
    fontSize: 16,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.manclrwhite,
    marginLeft: wp('2%'),
  },
  subtxt3con: {
    marginLeft: wp('16%'),
    top: hp('0.3%'),
  },
  subtxt3: {
    fontSize: 24,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.manclrwhite,
  },
});
