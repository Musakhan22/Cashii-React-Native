import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Warningtext from '../../components/warningtext';
import Custombutton from '../../components/custombutton';
import Itemcapsule from '../../components/itemcapsule';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmSecretPhraseScreen = ({route, data1}) => {
  const navigation = useNavigation();
  const {data} = route.params;
  const [unshuffleddata, setUnshuffleddata] = useState('            ');
  const [selectedTexts, setSelectedTexts] = useState([]);

  useEffect(() => {
    fetchaddress();
  }, []);
  console.log('DATATAT', unshuffleddata);
  console.log('DATATAT', selectedTexts);

  const fetchaddress = async () => {
    const mnemonic = await AsyncStorage.getItem('mnemonic');
    setUnshuffleddata(mnemonic.split(' '));
    console.log('DATATAT', mnemonic);
  };

  const addName = item => {
    if (selectedTexts.includes(item)) {
      Alert.alert('This Item already exists in the list.');
    } else {
      setSelectedTexts([...selectedTexts, item]);
    }
  };

  const removeitem = item => {
    setSelectedTexts(selectedTexts.filter(text => text !== item));
  };

  const compareArrays = (a, b) => {
    if (JSON.stringify(a) === JSON.stringify(b)) {
      return true;
    } else {
      return false;
    }
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: selectedTexts.includes(item)
            ? appColors.txtgrey
            : appColors.Btnblack,
        },
      ]}
      onPress={() => addName(item)}>
      <Text
        style={[
          styles.buttontxt,
          {
            color: appColors.maincolor,
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderSelectedItem = ({item}) => (
    <Itemcapsule key={item} data={item} onPress={() => removeitem(item)} />
  );

  return (
    <SafeAreaView style={styles.main}>
      <View style={{height: hp('4%')}} />
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>Confirm</Text>
        <Text style={styles.headertext}>Secret Phrase</Text>
      </View>
      <View style={styles.subtitlecon}>
        <Text style={styles.subtitletext}>
          Enter your secret phrases in correct order.
        </Text>
      </View>
      <View style={styles.itemcontainer}>
        <FlatList
          data={selectedTexts}
          renderItem={renderSelectedItem}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            flexGrow: 0,
            marginVertical: hp('2%'),
          }}
          columnWrapperStyle={{
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            width: wp('78%'),
            marginVertical: hp('1%'),
          }}
        />
      </View>
      <View style={styles.middlecontainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={3}
          contentContainerStyle={{flexGrow: 0}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.endcon}>
        <View style={{marginVertical: hp('1%')}}>
          <Warningtext />
        </View>
        <Custombutton
          color={appColors.Btnblack}
          textclr={appColors.maincolor}
          text={'Continue'}
          onpress={() => {
            if (compareArrays(unshuffleddata, selectedTexts) === true) {
              console.log('success');
              navigation.navigate('walletCreation');
            } else {
              Alert.alert('ERROR');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmSecretPhraseScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.maincolor,
  },
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    marginRight: wp('14%'),
  },
  headercon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('3%'),
    width: wp('85%'),
  },
  headertext: {
    fontSize: 48,
    fontFamily: 'ManropeExtraBold',
    color: appColors.txtblack,
  },
  subtitlecon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('1%'),
  },
  subtitletext: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    color: appColors.subtxt,
  },
  itemcontainer: {
    height: hp('23%'),
    width: wp('80%'),
    borderRadius: 16,
    backgroundColor: appColors.Btnblack,
    marginTop: hp('2%'),
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  //   itemslist: {
  //     flexDirection: 'row',
  //     // width: wp('68%'),
  //     marginVertical: hp('1.3%'),
  //     // marginHorizontal: wp('1%'),
  //     alignItems: 'flex-start',
  //     // justifyContent: 'space-around',
  //   },
  item: {
    textAlign: 'center',
    marginLeft: wp('2%'),
  },
  middlecontainer: {
    width: wp('84%'),
    height: hp('24%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // borderWidth: 2,
    marginTop: hp('2%'),
  },
  button: {
    width: wp('22%'),
    height: hp('4.5%'),
    marginHorizontal: wp('3%'),
    marginVertical: hp('0.7%'),
    borderRadius: 8,
    // backgroundColor: appColors.Btnblack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontxt: {
    fontFamily: 'PoppinsMedium',
    // color: appColors.maincolor,
    fontSize: 14,
  },
  endcon: {
    marginTop: hp('4%'),
  },
});
