import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from './appcolors';
import Icon from 'react-native-vector-icons/Ionicons';


const Activitiescontainer = ({data,title,icon,traling,image,selecion,points}) => {
    const [expanded, setExpanded] = React.useState(false);
  return (
        <View style={styles.itemslistcon}>
            <Image source={image} />
            <View style={{flexDirection:'column',width: wp('75%'),height: hp('5%')}}>
            <View style={styles.headercon}>
            <Text style={styles.titletxt}>{title}</Text>
            {selecion === true ? <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                <Icon name={icon} size={20}
                color={appColors.txtblack} />
            </TouchableOpacity> : <Text style={styles.endtxt}>{traling}</Text>  }

            </View>
            {expanded && <View style={styles.headercon1}>
                <View style={styles.expandedcon}>
                    <Text style={styles.expandedtxt1}>Value:  </Text>
                    <Text style={styles.expandedtxt2}>{points}</Text>
                </View>
                </View>}

            <View style={styles.subtitlecon}>
                <Text style={styles.subtitletxt}>Feb 8</Text>
            </View>
            </View>
        </View>
  );
};

export default Activitiescontainer;

const styles = StyleSheet.create({
  itemslistcon:{
    width: wp('85%'),
    height: hp('7%'),
    // borderWidth:2,
    marginTop:hp('3%'),
    marginLeft:wp('2%'),
    flexDirection:'row',
    alignItems:'center',
  },
  headercon:{
     width: wp('68%'),
    height: hp('3%'),
    marginLeft:wp('2%'),
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between',
    // borderWidth:2,
  },
  headercon1:{
    width: wp('68%'),
    height: hp('5%'),
    marginLeft:wp('2%'),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    // borderWidth:2,
  },
  expandedcon:{
     width: wp('60%'),
    height: hp('3%'),
    borderWidth:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:appColors.txtgrey,
  },
titletxt:{
     fontFamily: 'ManropeBold',
    fontSize: 16,
    color: appColors.txtblack,
    marginLeft:hp('2%'),
},
subtitletxt:{
     fontFamily:'PoppinsRegular',
    fontSize:12,
    color:appColors.subtxtgry,
},
subtitlecon:{
     width: wp('20%'),
    height: hp('3%'),
    flexDirection:'column',
    alignItems:'flex-start',
    marginLeft:wp('7%'),
    // borderWidth:2,
},
endtxt:{
     fontFamily:'PoppinsSemiBold',
    fontSize:20,
    color:appColors.subtxt,
},
expandedtxt1:{
     fontFamily: 'ManropeBold',
    fontSize: 20,
    color: appColors.txtblack,
},
expandedtxt2:{
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    color:appColors.subtxt,
},
});
