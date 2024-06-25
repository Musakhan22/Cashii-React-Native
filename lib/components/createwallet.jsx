import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ethers } from 'ethers';

const CreateWallets = () => {
  const [wallets, setWallets] = useState([]);
  const [mnemonic, setMnemonic] = useState('');

  const createMultipleWalletsFromMnemonic = (mnemonic, count) => {
    console.log('Mnemonics:', mnemonic);

    const basePath = "m/44'/60'/0'/0/";
    const newWallets = [];

    for (let i = 0; i < count; i++) {
      const wallet = ethers.Wallet.fromPhrase(mnemonic, basePath + i);

      console.log(`Wallet ${i + 1}:`);
      console.log('Address:', wallet.address);
      console.log('Private Key:', wallet.privateKey);
      console.log('-------');

      newWallets.push({
        address: wallet.address,
        privateKey: wallet.privateKey,
      });
    }

    setWallets(newWallets);
    return newWallets;
  };

  const handleGenerateWallets = async () => {
    const walletData = JSON.parse(await AsyncStorage.getItem('WalletData')) || [];
    console.log('DATA', walletData);
    const randomWallet = ethers.Wallet.createRandom();
    const generatedMnemonic = randomWallet.mnemonic.phrase;
    setMnemonic(generatedMnemonic);
    const newWallet = createMultipleWalletsFromMnemonic(generatedMnemonic, 1);
    const data = {
      address: newWallet[0]?.address,
      pubKey: newWallet[0]?.privateKey,
    };

    if (walletData.length === 0) {
      const initialData = {
        mnemonic: generatedMnemonic,
        address: newWallet[0]?.address,
        pubKey: newWallet[0]?.privateKey,
      };
      console.log('first', initialData);
      walletData.push(initialData);
    } else {
      console.log('Adding new wallet data', data);
      walletData.push(data);
    }

    await AsyncStorage.setItem('WalletData', JSON.stringify(walletData));

    console.log('Actual', walletData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Multiple Ethereum Wallets</Text>
      <Button title="Generate Wallets" onPress={handleGenerateWallets} />
      {mnemonic && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Mnemonic</Text>
          <Text>{mnemonic}</Text>
        </View>
      )}
      {wallets.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Generated Wallets</Text>
          {wallets.map((wallet, index) => (
            <View key={index} style={styles.wallet}>
              <Text>
                <Text style={styles.bold}>Wallet {index + 1}:</Text>
              </Text>
              <Text>
                <Text style={styles.bold}>Address:</Text> {wallet.address}
              </Text>
              <Text>
                <Text style={styles.bold}>Private Key:</Text> {wallet.privateKey}
              </Text>
              <View style={styles.divider} />
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};
export default CreateWallets;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  wallet: {
    marginBottom: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
})