import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from './appcolors';

import Icon from 'react-native-vector-icons/Ionicons';

const Walletselectorbutton = ({
  onpress,
  textcolor,
  backgroundcolor,
  text,
  icon,
  footertext,
  footerclr,
}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={[styles.buttoncontainer, {backgroundColor: backgroundcolor}]}>
      <View style={styles.itemscontainer}>
        <View style={styles.addcontainer}>
          <Icon name={icon} size={17} />
        </View>
        <Text style={[styles.buttontext, {color: textcolor}]}>{text}</Text>
      </View>
      <Text style={[styles.footertxt, {color: footerclr}]}>{footertext}</Text>
    </TouchableOpacity>
  );
};

export default Walletselectorbutton;

const styles = StyleSheet.create({
  buttoncontainer: {
    height: hp('8.5%'),
    width: wp('85%'),
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 16,
  },
  buttontext: {
    fontSize: 18,
    fontFamily: 'ManropeExtraBold',
    marginLeft: wp('2%'),
  },
  addcontainer: {
    height: hp('3.4%'),
    width: wp('7%'),
    borderWidth: 3,
    borderColor: appColors.txtgrey,
    borderRadius: 30,
    marginLeft: wp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('1.2%'),
    backgroundColor: appColors.maincolor,
  },
  itemscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footertxt: {
    marginLeft: wp('14%'),
  },
});
