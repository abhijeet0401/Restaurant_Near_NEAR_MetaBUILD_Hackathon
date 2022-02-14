import {  connect, Contract, keyStores,WalletAccount, WalletConnection,Account,KeyPair, utils} from 'near-api-js'
import getConfig from './config'

export const nearConfig = getConfig(process.env.NODE_ENV || 'development')

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const keypair=utils.KeyPair.fromRandom('ed25519')
  console.log(keypair.secretKey)
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))
  console.log(near)

  window.near = near;
  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near)
  window.wallet = new WalletAccount(near) 
  window.ConfigNear=nearConfig
  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()

  let privateKey=window.localStorage.getItem(`near-api-js:keystore:${accountId}:testnet`)
  console.log(privateKey)
  window.account= new Account(near.connection,accountId)
  window.utils=utils;

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['getGreeting','getName'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['setGreeting','deliverProducts','getInventory']
  })
}

// attached to the form used to update the greeting
// in utils because it works with a vanilla JS or a React approach
// export async function onSubmit(event) {
//   event.preventDefault()

//   // get elements from the form using their id attribute
//   const { fieldset, greeting } = event.target.elements

//   // disable the form while the value gets updated on-chain
//   fieldset.disabled = true

//   try {
//     // make an update call to the smart contract
//     await contract.setGreeting({
//       // pass the value that the user entered in the greeting field
//       message: greeting.value
//     })
//   } catch (e) {
//     alert(
//       'Something went wrong! ' +
//       'Maybe you need to sign out and back in? ' +
//       'Check your browser console for more info.'
//     )
//     throw e
//   } finally {
//     // re-enable the form, whether the call succeeded or failed
//     fieldset.disabled = false
//   }
// }

export function logout() {
  window.walletConnection.signOut()
  // reload page
  window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn('abhijeet04.testnet')
}