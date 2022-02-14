import 'regenerator-runtime/runtime'
import React,{useEffect, useState} from 'react'
import { login, logout } from './utils'

// import Container 
import Cart from "./Containers/Cart/Cart"
import Options from "./Containers/Options/Options"
import Inventory from "./Containers/Inventory/Inventory"

// import Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// import CSS
import {Container,Row,Col} from 'react-bootstrap';
import './global.css'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  
  const [cartNames,changeNames]=useState([]);
  const [cartSize,changeSize]=useState([]);
  const [cartQty,changeQty]=useState([]);
  const [cartPrice, changePrice]=useState(0);


     const addItem=(item,price)=>{   
        let itemQty=cartQty;
       

        if(cartNames.includes(item)){
          let index=cartNames.indexOf(item)
          itemQty[index]=itemQty[index]+1

          changeQty(
              cartQty=>[...itemQty]
          )
          changePrice(
            cartPrice+price
          )

        }
        else{
          changeNames(
            cartNames=>[...cartNames,item]
          )

          changeSize(
            cartSize=>[...cartSize,item]
          )
          changeQty(
            cartQty=>[...cartQty,1]
          )
          changePrice(
            cartPrice=>cartPrice+price
          )
        }
      
          
      }

      const clearCart=()=>{
        changeNames([])
        changeSize([])
        changeQty([])
        changePrice(0)
      }


  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
  <div className="App">
    <Navbar/>
   <h1>Foods</h1>
  
      <Options className="d-flex justify-content-center" addItem={addItem}></Options>
    
    
      <Row className="d-flex justify-content-center"><Inventory></Inventory></Row>
      <Row className="d-flex justify-content-center">
        <Cart clearCart={clearCart} names={cartNames} size={cartSize} qtys={cartQty} total={cartPrice}></Cart></Row>
    
    <Footer/>


  </div>
      
  )
}

