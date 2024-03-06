import { generateMnemonic, mnemonicToEntropy } from "ethereum-cryptography/bip39";
import { wordlist } from "ethereum-cryptography/bip39/wordlists/english";
import { HDKey } from "ethereum-cryptography/hdkey";
import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";

// generate a seed phrase and random number which is a number representation of the seed phrase
function _generateMnemonic() {
    const strength = 256;
    const mnemonic = generateMnemonic(wordlist, strength);
    const entropy = mnemonicToEntropy(mnemonic, wordlist);
    return { mnemonic, entropy };
}

// generate a Hierarchical Deterministic (HD) wallet from a seed phrase.
// an HD wallet is a tree of key pairs.
function _getHdRootKey(_mnemonic) {
    return HDKey.fromMasterSeed(_mnemonic);
}

// create a wallet account using the see phrase
function _generatePrivateKey(_hdRootKey, _accountIndex) {
    return _hdRootKey.deriveChild(_accountIndex).privateKey;
}

// using Elliptic Curve Digital Signature, we derive a pub key from the private
function _getPublicKey(_privateKey) {
    return secp256k1.getPublicKey(_privateKey);
}

// using the public key we can derive the ethereum
function _getEthAddress(_publicKey) {
    return keccak256(_publicKey).slice(-20);
}

function createNewWallet() {
    const { mnemonic, entropy } = _generateMnemonic();
    const hdRootKey = _getHdRootKey(entropy);

    // can create more than one
    const accountOneIndex = 0;
    const accountOnePrivateKey = _generatePrivateKey(hdRootKey, accountOneIndex);
    const accountOnePublicKey = _getPublicKey(accountOnePrivateKey);
    const accountOneAddress = _getEthAddress(accountOnePublicKey);

    return(
        {
            accountOnePrivateKey,
            accountOnePublicKey,
            accountOneAddress,
            seedPhrase: mnemonic
        }
    )
}

function restoreWallet() {}

export { createNewWallet, restoreWallet };
