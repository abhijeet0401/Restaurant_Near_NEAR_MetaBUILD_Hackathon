require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('truffle-hdwallet-provider')
const NonceTrackerSubprovider = require('web3-provider-engine/subproviders/nonce-tracker')
const utils = require('web3-utils')
const MNEMONIC = "vague confirm trumpet barrel better coyote clip solid similar anchor task open"
const startIndex = 0
const numberOfAccounts = 3
let hdWalletProvider

const setupWallet = (
    url
) => {
    if (!hdWalletProvider) {
        hdWalletProvider = new HDWalletProvider(
            MNEMONIC,
            url,
            startIndex,
            numberOfAccounts,
	    true,
	)
        hdWalletProvider.engine.addProvider(new NonceTrackerSubprovider())
    }
    return hdWalletProvider
}

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    aurora: {
      host: "127.0.0.1",
      port:7545,
      provider: () => setupWallet('https://testnet.aurora.dev'),
      network_id: 0x4e454153,
      gas: 10000000,
      from: '0x22c39D2FE93C3067C108448E814c19AcD5326589'
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.8",  
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}

// commands for truffle
//run tests - truffle test
// call console - truffle console
// get contract - await DaiToken.deployed()
//to compile -    truffle compile
//to deploy - truffle migrate --reset

//human readible balance - web3.utils.fromWei(balance)
