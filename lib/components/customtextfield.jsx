import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from './appcolors';

const Customtextfield = ({placeholder,securetext,placeholderclr,textstyle}) => {
      const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.textinput}>
      <TextInput  value={text} onChangeText={onChangeText} placeholder={placeholder} keyboardType="default" autoCorrect={false} autoCapitalize="words" secureTextEntry={securetext} placeholderTextColor={placeholderclr} style={textstyle} />
    </View>
  );
};

export default Customtextfield;

const styles = StyleSheet.create({
    textinput:{
         width: wp('85%'),
    height: hp('7%'),
    backgroundColor:appColors.maincolor,
    borderRadius:16,
    alignItems:'center',
    justifyContent:'center',
    },
    // inputxt:{
    //     fontSize:24,
    //     fontFamily:'PoppinsSemiBold',
    //     lineHeight:26,
    //     color:appColors.subtxt,
    // },
});
