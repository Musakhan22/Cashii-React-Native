import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from './appcolors';

const Itemscontainer = ({image,title,subtitle}) => {
  return (
   <View style={styles.itemscontainer}>
        <View style={styles.imgcon}>
            <Image source={image} />
        </View>
        <View style={styles.headercon}>
            <View style={styles.topitemcon}>
        <Text style={styles.headertxt}>{title}</Text>
        <View style={{width: wp('30%'),flexDirection:"row",alignItems:'center'}}>
            <TouchableOpacity>
        <Image style={{bottom:hp('0.5%'),marginHorizontal:wp('4%')}} source={require('../assets/images/share.png')} tintColor={'#292D32'}/>
            </TouchableOpacity>
            <TouchableOpacity>
        <Image style={{bottom:hp('0.5%')}} source={require('../assets/images/copy.png')} tintColor={'#292D32'}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.endtxt}>0.00</Text>
        </View>
        <View style={styles.bottomcon}>
       <Text style={styles.bottomtxt}>{subtitle}</Text>
       <Text style={styles.endtxt1}>≈0.00 USD</Text>
        </View>
        </View>
       </View>
  );
};

export default Itemscontainer;

const styles = StyleSheet.create({
    itemscontainer:{
    width: wp('90%'),
    // height:hp('8%'),
    // borderWidth:2,
    marginTop:hp('2%'),
    marginLeft:wp('2%'),
    flexDirection:'row',
    alignItems:'center',
  },
  imgcon:{
      height: hp('6%'),
    width: wp('14%'),
    backgroundColor:appColors.subgreycon,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:31,
    marginLeft:wp('2%'),
  },
  headercon:{
    width: wp('78%'),
    // borderWidth:2,
  },
  topitemcon:{
    width: wp('70%'),
    height: hp('4%'),
    // borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:wp('1%'),
  },
  bottomcon:{
     width: wp('70%'),
    height: hp('3%'),
    // borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:wp('1%'),

  },
headertxt:{
    fontFamily:'PoppinsRegular',
    fontSize:20,
    color:appColors.Btnblack,
    textAlign:'center',
    marginLeft:wp('1%'),
},
bottomtxt:{
     fontFamily:'PoppinsBold',
    fontSize:12,
    color:appColors.subtxt,
    marginLeft:wp('1%'),
},
endtxt:{
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    color:appColors.subtxt,
    textAlign:'center',
    marginLeft:wp('10%'),
},
endtxt1:{
    fontFamily:'PoppinsRegular',
    fontSize:12,
    color:appColors.subtxtgry,
    marginLeft: wp('20%'),
},
});
