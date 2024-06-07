import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from './appcolors';

const CustomDropdown = ({ data, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
    console.log(item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
        {item.image && <Image source={item.image} style={{marginHorizontal:wp('3%')}} />}
      <Text style={styles.selectedText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={() => toggleDropdown()}>
        {selectedItem && selectedItem.image && <Image source={selectedItem.image} style={{marginHorizontal:wp('3%')}} />}
        <Text style={styles.selectedText}>
          {selectedItem ? selectedItem.text : 'Select an item'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item,index) => index.toString()}
          style={styles.dropdownList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  selectedText: {
    fontSize: 16,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.Btnblack,
    alignItems:'center',
    justifyContent:'center',
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

export default CustomDropdown;
