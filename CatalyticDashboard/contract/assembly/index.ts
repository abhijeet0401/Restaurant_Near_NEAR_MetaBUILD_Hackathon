/*
 * This is an example of an AssemblyScript smart contract with two simple,
 * symmetric functions:
 *
 * 1. setGreeting: accepts a greeting, such as "howdy", and records it for the
 *    user (account_id) who sent the request
 * 2. getGreeting: accepts an account_id and returns the greeting saved for it,
 *    defaulting to "Hello"
 *
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */

import { Context, logging, storage, PersistentMap,} from "near-sdk-as";

let customerInventory=new PersistentMap<string,string[]>("c")


export function deliverProducts(checkout:string[]):void{
    if(customerInventory.contains(Context.sender)){
      let currInv:string[]=customerInventory.getSome(Context.sender)
      for (let i=0;i<checkout.length;i++){
        currInv.push(checkout[i])
      }
      customerInventory.set(Context.sender,currInv)
      logging.log(customerInventory.getSome(Context.sender))
    }
    else{
      customerInventory.set(Context.sender,checkout)
      logging.log(customerInventory.getSome(Context.sender))
    }
  }
  





  
  export function getInventory():string[]{
    if(customerInventory.contains(Context.sender)){
    return customerInventory.getSome(Context.sender)
    }
    else{
      return []
    }
  
  }