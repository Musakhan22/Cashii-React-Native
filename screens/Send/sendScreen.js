import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import {Dropdown} from 'react-native-element-dropdown';
import Customtextfield from '../../components/customtextfield';
import Custombutton from '../../components/custombutton';

const tokendata = [
  {
    value: '1',
    lable: 'BTC',
    image: require('../../assets/images/btc.png'),
  },
  {
    value: '2',
    lable: 'USDT',
    image: require('../../assets/images/usdt.png'),
  },
  {
    value: '3',
    lable: 'Ethereum',
    image: require('../../assets/images/eth.png'),
  },
  {
    value: '4',
    lable: 'BNB',
    image: require('../../assets/images/bnb.png'),
  },
  {
    value: '5',
    lable: 'TRX',
    image: require('../../assets/images/trx.png'),
  },
];

const networkData = [
  {
    value: '1',
    lable: 'ERC',
  },
  {
    value: '2',
    lable: 'BEP',
  },
  {
    value: '1',
    lable: 'TRC20',
  },
];

const SendScreen = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState('');
  const [network, setNetwork] = useState('');

  // const renderItem = ({item}) => (
  //   <View style={styles.itemContainer}>
  //     <Image source={item.image} style={styles.imageStyle} />
  //     <Text style={styles.itemText}>{item.label}</Text>
  //   </View>
  // );

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.backbuttoncon}>
          <Backbutton onPress={() => navigation.goBack()} />
          <Text style={styles.buttontxt}>Send Payment</Text>
        </View>
        <View style={styles.dropwdowntxtcon}>
          <Text style={styles.buttontoptxt}>Select Token</Text>
        </View>
        <View style={styles.dropwdowncontainer}>
          <Dropdown
            fontFamily="PoppinsSemiBold"
            itemTextStyle={styles.itemstyle}
            data={tokendata}
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            labelField="lable"
            placeholder="Select Token"
            // value={token}
            onChange={data => {
              setToken(data.label);
              console.log(token);
            }}
          />
        </View>
        <View style={styles.dropwdowntxtcon}>
          <Text style={styles.buttontoptxt}>Select Network</Text>
        </View>
        <View style={styles.dropwdowncontainer}>
          <Dropdown
            fontFamily="PoppinsSemiBold"
            itemTextStyle={styles.itemstyle}
            data={networkData}
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            // valueField={network}
            labelField="lable"
            placeholder="Select Network"
            onChange={data => {
              console.log(data);
              setNetwork(data.lable);
              console.log(network);
            }}
          />
        </View>
        <View style={styles.dropwdowntxtcon}>
          <Text style={styles.buttontoptxt}>Enter Amount(USD)</Text>
        </View>
        <View
          style={{
            marginLeft: wp('8%'),
          }}>
          <Customtextfield
            placeholder={'0.00'}
            placeholderclr={appColors.Btnblack}
            textstyle={styles.txtfield}
          />
        </View>
        <View style={styles.bottomtext}>
          <Text style={styles.buttontoptxt}>
            {'Current Balance is ${} ${}'}
          </Text>
        </View>
        <View style={styles.dropwdowntxtcon}>
          <Text style={styles.buttontoptxt}>Enter Wallet Address</Text>
        </View>
        <View
          style={{
            marginLeft: wp('8%'),
          }}>
          <Customtextfield
            placeholder={'_'}
            placeholderclr={appColors.Btnblack}
            textstyle={styles.txtfield1}
          />
        </View>
        <View style={{marginLeft: wp('8%'), marginTop: hp('7%')}}>
          <Custombutton
            text={'Next'}
            color={appColors.Btnblack}
            textclr={appColors.maincolor}
            onpress={() => navigation.navigate('sendPayment')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SendScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'flex-start',
    color: appColors.manclrwhite,
  },
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    marginLeft: wp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
  dropwdowntxtcon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    marginLeft: wp('9.5%'),
    marginBottom: hp('1%'),
  },
  buttontoptxt: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
    color: appColors.subtxtgry,
  },
  dropwdowncontainer: {
    width: wp('85%'),
    height: hp('6%'),
    // borderWidth: 2,
    alignSelf: 'flex-start',
    marginLeft: wp('8%'),
    borderRadius: 16,
    backgroundColor: appColors.maincolor,
  },
  dropdown: {
    width: wp('80%'),
    height: hp('6%'),
    borderRadius: 16,
  },
  imageStyle: {
    height: 20,
    width: 20,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.Btnblack,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: wp('40%'),
  },
  txtfield: {
    fontSize: 18,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.Btnblack,
  },
  txtfield1: {
    fontSize: 18,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.Btnblack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomtext: {
    width: wp('75%'),
    marginTop: hp('2%'),
    marginLeft: wp('9%'),
  },
});
