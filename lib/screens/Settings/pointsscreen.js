import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Custombutton from '../../components/custombutton';

const Pointsscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={{height: hp('4%')}} />
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>Points</Text>
      </View>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>
          Earn <Text style={styles.headertext1}>Cashii Points </Text>for
        </Text>
        <Text style={styles.headertext}>each friend you invite.</Text>
      </View>
      <View style={styles.subtitlecon}>
        <Text style={styles.subtitletext}>
          Save your 12 word phrase into a safe place{' '}
        </Text>
        <Text style={styles.subtitletext}>on your own.</Text>
      </View>
      <View style={styles.topcontainer}>
        <View style={styles.textcon}>
          <Text style={styles.titletxt}>Total Points Earned:</Text>
          <Text style={styles.subtitletxt}>1160</Text>
        </View>
      </View>
      <View style={{marginTop: hp('5%')}}>
        <Custombutton
          color={appColors.subtxtgry}
          textclr={appColors.maincolor}
          text={'Send'}
          onpress={null}
        />
      </View>
      <View style={styles.middlecon}>
        <Text style={styles.subtitletext}>
          Invite friends from your favorite network.
        </Text>
      </View>
      <View style={styles.buttonsCon}>
        <TouchableOpacity
          style={styles.con1}
          onPress={() => console.log('button')}>
          <Image source={require('../../assets/images/Dark.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.con2}
          onPress={() => console.log('pressed')}>
          <Image source={require('../../assets/images/tele.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pointsscreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.manclrwhite,
  },
  backbuttoncon: {
    width: wp('85%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    marginLeft: wp('3%'),
    alignItems: 'center',
    // borderWidth: 2,
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
  headercon: {
    width: wp('90%'),
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('4%'),
    marginLeft: wp('3%'),
    // borderWidth: 2,
  },
  headertext: {
    fontSize: 32,
    fontFamily: 'ManropeExtraBold',
    color: appColors.txtblack,
  },
  headertext1: {
    fontSize: 32,
    fontFamily: 'ManropeExtraBold',
    color: appColors.clryellow,
  },
  subtitlecon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('2%'),
    marginLeft: wp('2%'),
  },
  subtitletext: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    color: appColors.subtxt,
  },
  topcontainer: {
    height: hp('17%'),
    width: wp('85%'),
    borderRadius: 16,
    backgroundColor: appColors.maingreen,
    marginTop: hp('3%'),
    alignItems: 'flex-start',
  },
  textcon: {
    marginTop: hp('3%'),
    marginLeft: wp('2%'),
  },
  titletxt: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
    color: appColors.subtxt,
  },
  subtitletxt: {
    fontSize: 48,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.subtxt,
  },
  middlecon: {
    marginTop: hp('5%'),
  },
  buttonsCon: {
    width: wp('40%'),
    // borderWidth: 2,
    marginTop: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  con1: {
    height: hp('8%'),
    width: wp('18%'),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.clrblackdark,
  },
  con2: {
    height: hp('8%'),
    width: wp('18%'),
    // borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.maincolor,
  },
});
