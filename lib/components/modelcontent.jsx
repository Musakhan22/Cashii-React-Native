import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from './appcolors';

const Modelcontent = ({cancelpress,logoutpress}) => {
  return (
     <View style={styles.modalContainer}>
            <View style={styles.headercontainer}>
                <View style={styles.iconcon}>
                    <Image source={require('../assets/images/logout-3.png')} />
                </View>
                <Text style={styles.icontxt}>Logout!</Text>
            </View>
            <View style={styles.subtitlecon}>
            <Text style={styles.subtitletxt}>Are you sure you want to logout the session?</Text>
            </View>
            <View style={styles.footercon}>
                <TouchableOpacity style={styles.button1} onPress={cancelpress}>
                    <Text style={styles.btntxt}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={logoutpress}>
                    <Text style={styles.btntxt}>Logout</Text>
                </TouchableOpacity>
            </View>
          </View>
  );
};

export default Modelcontent;

const styles = StyleSheet.create({
    modalContainer: {
    backgroundColor: appColors.maincolor,
    alignItems: 'flex-start',
    borderRadius: 24,
    height: hp('20%'),
    width: wp('88%'),
    position: 'absolute',
    top: hp('30%'),
    left: wp('2%'),
  },
  headercontainer: {
    width: wp('34%'),
    // borderWidth: 2,
    flexDirection: 'row',
    marginTop: hp('2%'),
    marginLeft: wp('2%'),
    alignItems:'center',
  },
  iconcon: {
    height: hp('4.8%'),
    width: wp('11.9%'),
    borderRadius: 30,
    backgroundColor:'rgba(82, 82, 82, 0.08)',
    shadowColor: 'rgba(82, 82, 82, 0.08)', // Adjust opacity as needed (0 for no shadow)
    shadowOffset: { width: 0, height: 0 }, // No offset for centered shadow
    shadowOpacity: 1, // Maximum shadow intensity
    shadowRadius: 6, // Adjust blur radius for desired softness
    elevation: 10,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:wp('3%'),
  },
  icontxt:{
    fontFamily:'PoppinsMedium',
    color: appColors.subtxt,
    fontSize:14,
  },
  subtitlecon:{
    marginLeft:wp('8%'),
    marginTop:hp('2%'),
  },
  subtitletxt:{
     fontFamily:'PoppinsMedium',
    color: appColors.subtxt,
    fontSize:12,
  },
  footercon:{
    height:hp('6%'),
    width:wp('83%'),
    // borderWidth:2,
    marginLeft:wp('2%'),
    marginTop:hp('1%'),
    flexDirection:'row',
    alignItems:'center',
  },
  button1:{
    height: hp('6%'),
    width: wp('40%'),
    backgroundColor:appColors.subtxtgry,
    borderRadius:12,
    alignItems:'center',
    justifyContent:'center',
  },
  button2:{
    height: hp('6%'),
    width: wp('40%'),
    alignItems:'center',
    justifyContent:'center',
    marginLeft:wp('2%'),
    backgroundColor:appColors.clrred,
    borderRadius:12,
  },
  btntxt:{
    fontFamily:'PoppinsSemiBold',
    color: appColors.maincolor,
    fontSize:14,
  },
});
