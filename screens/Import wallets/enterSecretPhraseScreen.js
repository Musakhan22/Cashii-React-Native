import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';

import Backbutton from '../../components/backbutton';
import {SafeAreaView} from 'react-native-safe-area-context';
import Customiconbutton from '../../components/customiconbutton';
import Custombutton from '../../components/custombutton';
import Warningtext from '../../components/warningtext';
import Clipboard from '@react-native-clipboard/clipboard';
import Itemcapsule from '../../components/itemcapsule';

const EnterSecretPhraseScreen = () => {
  const navigation = useNavigation();
  const [pastedText, setPastedText] = useState('');
  const [buttontapped, setbuttonTapped] = useState(true);

  const [items, setItems] = useState([]);

  const pasteFromClipboard = async () => {
    const clipboardContent = await Clipboard.getString();
    console.log(clipboardContent);
    setbuttonTapped(false);
    if (clipboardContent) {
      const newItems = clipboardContent.split(' ');
      setPastedText(clipboardContent);
      setItems(prevItems => [...prevItems, ...newItems]);
      console.log(clipboardContent);
      console.log(newItems.length);
    } else if (items.length === 0) {
      Alert.alert('No Items');
    } else {
      Alert.alert('Error', 'No content to paste from clipboard');
    }
  };

  const removeitem = item => {
    setItems(items.filter(text => text !== item));
  };

  const renderSelectedItem = ({item}) => (
    <Itemcapsule key={item} data={item} onPress={() => removeitem(item)} />
  );

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.headercon}>
        <Text style={styles.headertext}>Enter Secret</Text>
        <Text style={styles.headertext}>Phrase</Text>
      </View>
      <View style={styles.subtitlecon}>
        <Text style={styles.subtitletext}>
          Enter your secret phrases in correct order.
        </Text>
      </View>
      <View style={styles.ItemsContainer}>
        <FlatList
          data={items}
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
      {buttontapped === false ? (
        <View style={styles.buttoncon} />
      ) : (
        <View style={styles.buttoncon}>
          <Customiconbutton onPress={pasteFromClipboard} />
          <Text style={styles.buttontxt}>Paste</Text>
        </View>
      )}
      <View style={{marginTop: hp('24%')}}>
        <View style={{marginBottom: hp('1%')}}>
          <Warningtext />
        </View>
        <Custombutton
          color={appColors.Btnblack}
          textclr={appColors.maincolor}
          text={'Continue'}
          onpress={() => navigation.navigate('walletAdded')}
        />
      </View>
    </SafeAreaView>
  );
};

export default EnterSecretPhraseScreen;

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
  ItemsContainer: {
    height: hp('24%'),
    width: wp('80%'),
    backgroundColor: appColors.Btnblack,
    borderRadius: 16,
    marginTop: hp('2%'),
  },
  buttoncon: {
    width: wp('20%'),
    // borderWidth: 2,
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontxt: {
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
    color: appColors.subtxt,
    textAlign: 'center',
  },
});
