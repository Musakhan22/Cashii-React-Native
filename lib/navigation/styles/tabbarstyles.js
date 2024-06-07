import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';

export default styles;

const styles = StyleSheet.create({
  tabBar: {
    height: hp('9%'),
    elevation: 0,
    borderRadius: 24,
    position: 'absolute',
    bottom: hp('2%'),
    left: wp('5%'),
    right: wp('5%'),
    backgroundColor: appColors.Btnblack,
    alignItems: 'center',
    shadowColor: appColors.txtgrey,
    shadowOffset: {
      width: 0,
      height: hp('1%'),
    },
  },
  imgcontainer: {
    alignItems: 'center',
  },
  imgcontainer1: {
    alignItems: 'center',
    bottom: hp('1%'),
  },
  mainclr: {
    tintColor: appColors.Btnblack,
  },
  greyclr: {
    tintColor: appColors.txtgrey,
  },
  tabBarLine: {
    height: hp('0.5%'), // Adjust the height as needed
    width: wp('10%'), // Adjust the width to fit the icon and text
    backgroundColor: appColors.maingreen,
    marginTop: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
