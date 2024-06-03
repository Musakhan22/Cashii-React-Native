import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Customlistbutton from '../../components/customlistbutton';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.main}>
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
          image={'../../assets/images/eye.png'}
          onPress={() => navigation.navigate('revealsecretSettings')}
        />
        <Customlistbutton
          text={'Logout'}
          image={'../../assets/images/logout.png'}
          onPress={showModal}
        />
        <Modal
          visible={isVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={hideModal}>
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={hideModal}>
            <View style={styles.modelcontent}>
              <View style={styles.headercontainer}>
                <View style={styles.iconcon}>
                  <Image source={require('../../assets/images/logout-3.png')} />
                </View>
                <Text style={styles.headertxt}>Logout!</Text>
              </View>
              <Text style={styles.middletxt}>
                Are you sure you want to logout the session?
              </Text>
              <View style={{width: wp('40%'), flexDirection: 'row'}}></View>
            </View>
          </TouchableOpacity>
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
  itemListCon: {
    height: hp('90%'),
    width: wp('98%'),
    // borderWidth: 2,
    marginTop: hp('2%'),
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  modalContainer: {
    backgroundColor: appColors.maincolor,
    alignItems: 'center',
    borderRadius: 24,
    height: hp('24%'),
    width: wp('65%'),
    position: 'absolute',
    top: hp('30%'),
    left: wp('10%'),
    borderWidth: 2,
  },
  iconcon: {
    height: hp('3.4%'),
    width: wp('7%'),
    borderRadius: 30,
    backgroundColor: appColors.clrred,
  },
  headercontainer: {
    width: wp('24%'),
    borderWidth: 2,
    flexDirection: 'row',
    marginTop: hp('2%'),
  },
});
