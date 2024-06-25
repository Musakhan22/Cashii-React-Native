import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Modelcontent from '../../components/modelcontent';
import Customlistbutton from '../../components/customlistbutton';
import {clearStorage} from '../../Storage/asyncstorage';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModel = () => setIsModalVisible(false);

  return (
    <View style={styles.main}>
      <View style={{height: hp('4%')}} />
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>Settings</Text>
      </View>
      <View style={styles.itemListCon}>
        <Customlistbutton
          text={'General Settings'}
          image={require('../../assets/images/setting-1.png')}
          onPress={() => navigation.navigate('generalSettings')}
        />
        <Customlistbutton
          text={'Points'}
          image={require('../../assets/images/recieved.png')}
          onPress={() => navigation.navigate('pointsScreen')}
        />
        <Customlistbutton
          text={'Transaction History'}
          image={require('../../assets/images/receipt.png')}
          onPress={() => navigation.navigate('transactionhistoryscreen')}
        />
        <Customlistbutton
          text={'Wallet Address'}
          image={require('../../assets/images/wallet-3.png')}
          onPress={() => navigation.navigate('walletaddressscreen')}
        />
        <Customlistbutton
          text={'Reveal Secret Phrase'}
          image={require('../../assets/images/reveal-1.png')}
          onPress={() => navigation.navigate('revealsecretSettings')}
        />
        <Customlistbutton
          text={'Logout'}
          image={require('../../assets/images/logout-1.png')}
          onPress={() => openModal()}
        />
        <Modal isVisible={isModalVisible} onBackdropPress={() => closeModel()}>
          <Modelcontent
            cancelpress={() => closeModel()}
            logoutpress={() => {
              console.log('clear');
              clearStorage();
              navigation.navigate('connectWallet');
            }}
          />
        </Modal>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.manclrwhite,
  },
  backbuttoncon: {
    width: wp('85%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    marginLeft: wp('3%'),
    alignItems: 'center',
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
  itemListCon: {
    height: hp('90%'),
    width: wp('98%'),
    marginTop: hp('2%'),
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
