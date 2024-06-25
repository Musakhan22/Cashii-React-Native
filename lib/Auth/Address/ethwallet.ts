import * as bip39 from 'bip39';
import {
  ethers,
  HDNodeWallet,
  JsonRpcProvider,
  toBeHex,
} from 'ethers';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAINID = Config.CHAINID;
const TRANSACTION_GAS_MAX_LIMIT = 36000;
const WALLET_PROVIDER = Config.DEV_WALLET_PROVIDER;
const provider = new JsonRpcProvider(WALLET_PROVIDER);
let ethersWallet: HDNodeWallet | null = null;

const cryptoWallet = {
  getMnemonic: async () => {
    // const WALLET_MNEMONIC = Config.WALLET_MNEMONIC;
    try {
      const WALLET_MNEMONIC = await AsyncStorage.getItem('mnemonic');
      if (WALLET_MNEMONIC) {
        return WALLET_MNEMONIC;
      }
    } catch (e) {
      console.log('getMnemonic Error: ', e);
      return null;
    }
  },

  async createCryptoWallet() {
    try {
      const mnemonic = bip39.generateMnemonic();
      const isValidMnemonic = bip39.validateMnemonic(mnemonic);

      if (!isValidMnemonic) throw Error('Mnemonic is not valid');
      console.log({mnemonic});
      await AsyncStorage.setItem('mnemonic', mnemonic);
      const wallet = ethers.Wallet.fromPhrase(mnemonic);

      const {address, privateKey} = wallet;
      console.log({address, privateKey});
      ethersWallet = wallet;
      return {wallet, mnemonic};
    } catch (e) {
      console.log('Error createCryptoWallet: ', {e});
      return e;
    }
  },

  async createCryptoWalletFromExixtingInfo(info: string) {
    try {
      console.log('MNEMONICS',info);
      const mnemonic = info;
      const isValidMnemonic = bip39.validateMnemonic(mnemonic);

      if (!isValidMnemonic) throw Error('Mnemonic is not valid');
      console.log({mnemonic});
      await AsyncStorage.setItem('mnemonic', mnemonic);
      const wallet = ethers.Wallet.fromPhrase(mnemonic);

      const {address, privateKey} = wallet;
      console.log({address, privateKey});
      ethersWallet = wallet;
      return wallet;
    } catch (e) {
      console.log('Error createCryptoWalletFromExixtingInfo: ', {e});
      throw Error('Failed Create from Mnemonic.');
    }
  },

  getWallet() {
    return ethersWallet;
  },

  async getBalance() {
    if (ethersWallet) {
      const {address} = ethersWallet;
      const balanceWei = await provider.getBalance(address);
      const balanceETH = ethers.formatEther(balanceWei);
      return {balanceWei, balanceETH};
    }
  },

  async connectCryptoWallet() {
    const mnemonic = await this.getMnemonic();
    if (mnemonic) {
      const isValidMnemonic = bip39.validateMnemonic(mnemonic);
      if (!isValidMnemonic) throw Error('Mnemonic is not valid');
      const wallet = await this.restoreCryptoWallet(mnemonic);
      return wallet;
    }
    throw Error('Wallet does not exist.');
  },

  async restoreCryptoWallet(mnemonic: string): Promise<HDNodeWallet> {
    try {
      if (!mnemonic) {
        throw Error('Mnemonic not found. Wallet does not exist.');
      }

      // Create the wallet using the mnemonic
      const wallet: HDNodeWallet = ethers.Wallet.fromPhrase(mnemonic);
      // const {address, privateKey} = wallet;
      ethersWallet = wallet;

      // const balanceWei = await provider.getBalance(wallet.address);
      // const balanceETH = ethers.formatEther(balanceWei);

      return wallet;
    } catch (e) {
      console.log('Error restoreCryptoWallet: ', {e});
      throw Error('Error restoring wallet');
    }
  },

  async transferETH(toAddress: string, value: any): Promise<any> {
    if (ethersWallet && provider) {
      const wallet = new ethers.Wallet(ethersWallet.privateKey, provider);
      const {gasPrice} = await provider.getFeeData();
      const nonce = await wallet.getNonce();
      try {
        const tx = await wallet.sendTransaction({
          to: toAddress,
          value: ethers.parseUnits(value.toString(), 'wei'),
          gasPrice: gasPrice,
          nonce,
          chainId: toBeHex(CHAINID ? CHAINID : 1),
          gasLimit: TRANSACTION_GAS_MAX_LIMIT,
        });
        console.log('transferTokens: ', tx);
        return tx.hash;
      } catch (error) {
        console.log(`Error sending ETH:`, error);
        throw new Error(`Error: Sending ETH failed.`);
      }
    } else {
      throw new Error('Wallet, or provider not initialized');
    }
  },
};

export default cryptoWallet;
