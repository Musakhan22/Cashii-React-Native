import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {networkData, tokenData} from '../../data/dummydata';
import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Customtextfield from '../../components/customtextfield';
import Custombutton from '../../components/custombutton';
import CustomDropdown from '../../components/custom_dropdown';

const SendScreen = () => {
  const navigation = useNavigation();

  const handleSelect = item => {
    console.log('Selected item:', item.text);
  };
  const handlenetworkdata = item => {
    console.log('networkselected:', item.text);
  };
  const dropdownData = networkData.map(item => ({
    text: item.text,
    value: item.value,
  }));
  const tokendata = tokenData.map(item => ({
    text: item.text,
    image: item.image,
  }));

  // const CustomDropDownList = props => {
  //   const [visibalList, setVisibalList] = useState(false);
  //   const [selectedItem, setSelectedItem] = useState({
  //     text: props?.text,
  //     icon: props?.headingIcon,
  //   });

  //   const ListItem = props => {
  //     return (
  //       <TouchableOpacity
  //         onPress={props?.onPress ? props.onPress : null}
  //         style={[
  //           props?.style && props?.style,
  //           {
  //             width: '94%',
  //             height: 40,
  //             flexDirection: 'row',
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             marginHorizontal: '3%',
  //           },
  //         ]}>
  //         {props?.icon && <View>{props.icon}</View>}
  //         {props?.text && (
  //           <Text
  //             style={[
  //               props?.textStyle && props?.styleText,
  //               {fontSize: 16, fontWeight: 600, color: 'black'},
  //             ]}>
  //             {props?.text}
  //           </Text>
  //         )}
  //       </TouchableOpacity>
  //     );
  //   };

  //   return (
  //     <View style={{width: '100%'}}>
  //       <ListItem
  //         style={props?.headingStyle}
  //         textStyle={props?.headingTextStyle}
  //         text={selectedItem?.text}
  //         icon={<Text>{selectedItem?.icon}</Text>}
  //         onPress={() => setVisibalList(!visibalList)}
  //       />
  //       {visibalList && (
  //         <View>
  //           {props?.data &&
  //             props?.data.map((item, index) => (
  //               <ListItem
  //                 onPress={() => {
  //                   setVisibalList(false);
  //                   setSelectedItem(item.text);
  //                 }}
  //                 style={props?.itemStyle}
  //                 textStyle={props?.itemTextStyle}
  //                 text={
  //                   typeof item === 'string'
  //                     ? item
  //                     : item?.text
  //                     ? item.text
  //                     : null
  //                 }
  //                 icon={item?.icon ? item?.icon : null}
  //                 key={index}
  //               />
  //             ))}
  //         </View>
  //       )}
  //     </View>
  //   );
  // };
  return (
    <View style={styles.main}>
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>Send Payment</Text>
      </View>
      <View style={styles.dropwdowntxtcon}>
        <Text style={styles.buttontoptxt}>Select Token</Text>
      </View>
      <View style={styles.networkcon}>
        <CustomDropdown data={tokendata} onSelect={handleSelect} />
      </View>
      {/* <CustomDropDownList
        headingStyle={{
          backgroundColor: 'white',
        }}
        headingIcon={'icon'}
        headerText={'List View'}
        itemStyle={{
          backgroundColor: 'white',
        }}
        data={tokenData}
      /> */}
      {/* <View style={styles.dropwdowncontainer}></View> */}
      <View style={styles.dropwdowntxtcon}>
        <Text style={styles.buttontoptxt}>Select Network</Text>
      </View>
      <View style={styles.networkcon}>
        <CustomDropdown data={dropdownData} onSelect={handlenetworkdata} />
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
        <Text style={styles.buttontoptxt}>{'Current Balance is ${} ${}'}</Text>
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
          onpress={() => {
            navigation.navigate('sendPayment');
          }}
        />
      </View>
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
    // borderWidth: 2,
    width: wp('75%'),
    marginTop: hp('3%'),
    marginLeft: wp('9.5%'),
    marginBottom: hp('1%'),
  },
  buttontoptxt: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
    color: appColors.subtxtgry,
  },
  networkcon: {
    marginLeft: wp('7%'),
  },
  txtfield: {
    fontSize: 18,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.Btnblack,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('90%'),
    textAlign: 'center',
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
