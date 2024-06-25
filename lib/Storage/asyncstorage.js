import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data stored successfully!', value);
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Parse the retrieved string back to its original type
      const parsedValue = JSON.parse(value);
      console.log('Retrieved data:', parsedValue);
      return parsedValue;
    } else {
      console.log('No data found for key:', key);
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed successfully!');
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Storage cleared successfully!');
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};

// Be cautious when using clearStorage as it removes all data
