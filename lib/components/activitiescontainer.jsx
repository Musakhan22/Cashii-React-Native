import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from './appcolors';
import Icon from 'react-native-vector-icons/Ionicons';


const Activitiescontainer = ({title,trailing,image,selector,data1}) => {
  const [isOpen, setIsOpen] = React.useState(false);
const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(title);
    // console.log(dataArray);
    console.log(dataArray.length);
  };
  const handleSelect = (item) => {
    console.log(item);
    setIsOpen(false);
  };
    const dataArray = Array.isArray(data1) ? data1 : [data1];
     // Calculate the dynamic height based on the points
  // const containerHeight = dataArray.reduce((acc, item) => acc + item.points, 0) / 10;

  const renderItem = ({ item }) => (
    <View style={styles.itemcontainer}>
    <View style={styles.dropdown}>
      <Text style={styles.titletext}>{item.title}</Text>
      <Text style={styles.endtxt}>{item.points}</Text>
    </View>
    </View>
  );
    return (
        <View style={[styles.itemslistcon,isOpen && {marginBottom:dataArray.length > 5 ? hp('30%') : hp(`${data1.length * 8}%`)}]}>
            <Image source={image} />
            <View style={{flexDirection:'column',width: wp('75%'),height: hp('5%')}}>
            <View style={styles.headercon}>
            <Text style={styles.titletxt}>{title}</Text>
            {selector ? (
          <TouchableOpacity onPress={toggleDropdown}>
            <Icon name="chevron-down-sharp" size={20} color="black" />
          </TouchableOpacity>
        ) : (
          <Text style={styles.endtxt}>{trailing}</Text>
        )}
            </View>
                {isOpen &&
                  <FlatList data={dataArray} renderItem={renderItem} extraData={data1} keyExtractor={(item, index) => index.toString()}
          style={[isOpen && styles.dropdownList,{ height: dataArray.length > 5 ? hp('30%') : hp(`${data1.length * 7}%`) }]} />
                  }
            <View style={[styles.subtitlecon,isOpen && styles.expandedsubcontainer]}>
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
    marginTop:hp('3%'),
    marginLeft:wp('2%'),
    flexDirection:'row',
    alignItems:'center',
  },
  expandedcontainer:{
    marginBottom: hp('19%'),
  },
  expandedsubcontainer:{
     width: wp('10%'),
    height: hp('3%'),
    flexDirection:'column',
    alignItems:'flex-start',
    marginLeft:wp('1%'),
    top:hp('3%'),
  },
  headercon:{
     width: wp('70%'),
    height: hp('3%'),
    marginLeft:wp('1%'),
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between',
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
     width: wp('10%'),
    height: hp('3%'),
    flexDirection:'column',
    alignItems:'flex-start',
    marginLeft:wp('6%'),
    // borderWidth:2,
},
endtxt:{
     fontFamily:'PoppinsSemiBold',
    fontSize:20,
    color:appColors.subtxt,
},
container: {
    width: wp('85%'),
    zIndex:10,
  },
dropdown: {
    width: wp('60%'),
    height: hp('4%'),
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
  },
  dropdownList: {
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: appColors.maincolor,
    borderRadius: 10,
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height: hp('20%'),
    width: wp('80%'),
    right:wp('5%'),
    top:hp('2%'),
    flexGrow:1,
  },
  item: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: wp('75%'),
  },
  titletext:{
  fontSize: 16,
  color: appColors.Btnblack,
  fontFamily:'ManropeBold',
  },
  subtext:{
  fontSize: 20,
  color: appColors.subtxt,
  fontFamily:'ManropeMedium',
  },
  itemcontainer:{
    flexDirection:'column',
    width: wp('70%'),
    height: hp('5%'),
    alignItems:'center',
    // borderWidth:2,
    marginVertical:hp('0.5%'),
  },
});

