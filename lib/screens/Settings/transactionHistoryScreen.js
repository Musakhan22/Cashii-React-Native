import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Backbutton from '../../components/backbutton';
import appColors from '../../components/appcolors';
import Transactionmodel from '../../components/transactionmodel';
import Wallet from '../../Auth/Address/ethwallet';

const TransactionHistoryScreen = () => {
  const navigation = useNavigation();
  // const DATA = [
  //   {id: '0 ', address: 'xxcss3434s98csmnx8s03mmx98'},
  //   {id: '1 ', address: 'xxcss3434s98csmnx8s03mmx98'},
  //   {id: '2 ', address: 'xxcss3434s98csmnx8s03mmx98'},
  //   {id: '3 ', address: 'xxcss3434s98csmnx8s03mmx98'},
  //   {id: '4', address: 'xxcss3434s98csmnx8s03mmx98'},
  // ];
  // const renderItem = ({item}) => {
  //   return (
  //     <View style={{}}>
  //       <TouchableOpacity style={styles.itemcontainer}>
  //         <Text style={styles.itemtext}>{item.address}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModel = () => setIsModalVisible(false);

  return (
    <View style={styles.main}>
      <View style={{height: hp('4%')}} />
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>Transaction History</Text>
      </View>
      <View style={styles.listcon}>
        <TouchableOpacity
          style={styles.itemcontainer}
          onPress={() => openModal()}>
          <Text style={styles.itemtext1}>TransactionHash: </Text>
          <Text style={styles.itemtext}>{'xxcss3434s98csmnx8s03mmx...'}</Text>
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => closeModel()}
          children>
          <Transactionmodel />
        </Modal>
        <TouchableOpacity style={styles.itemcontainer}>
          <Text style={styles.itemtext1}>TransactionHash: </Text>
          <Text style={styles.itemtext}>{'xxcss3434s98csmnx8s03mmx...'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemcontainer}>
          <Text style={styles.itemtext1}>TransactionHash: </Text>
          <Text style={styles.itemtext}>{'xxcss3434s98csmnx8s03mmx...'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemcontainer}>
          <Text style={styles.itemtext1}>TransactionHash: </Text>
          <Text style={styles.itemtext}>{'xxcss3434s98csmnx8s03mmx...'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    color: appColors.manclrwhite,
  },
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    marginRight: wp('12%'),
    alignItems: 'center',
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
  items: {
    borderWidth: 2,
    marginTop: hp('2'),
    flexGrow: 0,
    height: hp('80%'),
    width: wp('100%'),
  },
  itemcontainer: {
    width: wp('88%'),
    height: hp('7%'),
    backgroundColor: appColors.maincolor,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('2%'),
    flexDirection: 'row',
  },
  listcon: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: hp('4%'),
  },
  itemtext1: {
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
    color: appColors.Btnblack,
    textAlign: 'center',
  },
  itemtext: {
    fontSize: 14,
    fontFamily: 'PoppinsRegular',
    color: appColors.subtxt,
    textAlign: 'center',
  },
});
