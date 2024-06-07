import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from './appcolors';
import Icon from 'react-native-vector-icons/Ionicons';


const Activitiescontainer = ({title,icon,traling,image,selecion,data1}) => {
  const [isOpen, setIsOpen] = React.useState(false);
const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (item) => {
    // setSelectedItem(item);
    // onSelect(item);
    setIsOpen(false);
    console.log(item);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.dropdown} onPress={() => handleSelect(item)}>
      <Text>{item.title}</Text>
      <Text>{item.points}</Text>
    </TouchableOpacity>
  );
    return (
        <View style={styles.itemslistcon}>
            <Image source={image} />
            <View style={{flexDirection:'column',width: wp('75%'),height: hp('5%')}}>
            <View style={styles.headercon}>
            <Text style={styles.titletxt}>{title}</Text>
            {selecion === true ? <TouchableOpacity onPress={() => toggleDropdown()}>
                <Icon name={icon} size={20}
                color={appColors.txtblack} />
            </TouchableOpacity> : <Text style={styles.endtxt}>{traling}</Text>}
            </View>
                {isOpen &&
                <View style={styles.container}>
                  <FlatList data={data1} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}
          style={styles.dropdownList} />
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
container: {
    width: wp('85%'),
    // marginLeft: 30,
  },
dropdown: {
    backgroundColor: appColors.maincolor,
    borderRadius: 16,
    width: wp('85%'),
    height: hp('7%'),
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  dropdownList: {
    flexDirection:'row',
    marginTop: 5,
    backgroundColor: appColors.maincolor,
    borderRadius: 6,
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height: 180,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    // borderWidth:2,
    width: wp('85%'),
  },
});
