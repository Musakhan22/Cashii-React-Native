import { Snackbar } from 'react-native-snackbar';

import appColors from './appcolors';

const Customsnackbar = ({text,onPress}) => {
  return (
    Snackbar.show({
      text, // Use the provided text
      textColor: appColors.maincolor, // Assuming txtclr is a defined color variable
      fontFamily: 'ManropeSemiBold', // Set the font family if available
      backgroundColor: appColors.Btnblack, // Assuming btnblk is a defined color variable
      duration: Snackbar.LENGTH_SHORT, // Adjust duration as needed (2 seconds in this case)
      action: {
        text: 'Dismiss', // Optional dismiss button
        onPress: () => {onPress;},
        textColor: appColors.maincolor, // Color for the dismiss button text
      },
    }));

};

export default Customsnackbar;
