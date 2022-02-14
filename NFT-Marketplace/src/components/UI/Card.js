import React from 'react';
import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.Card}>
      <h2>ERC-721</h2>

      <h3>
        This is a React, JS, Solidity application, for issue, mint, list and
        sell NFT (ERC-721 & ERC1155) Tokens
        <ul>
          <li>
            Create an NFT marketplace contract that supports ERC721 and ERC1155
          </li>
          <br></br>
          <li>Sellers can list their NFTs on this platform</li>
          <br></br>
          <li>Buyers can preview, and purchase NFTs listed on the platform</li>
        </ul>
      </h3>
      <h3>
        

Contract: NFTMinter Checking if conract is deployed to network 
✓ contract deployed sucessfully 
✓ contract has matching name (134ms) 
✓ token has symbol (196ms) Minting of new token 
✓ creates new token (476ms) 
✓ mints tokens from 0x0 address (549ms) 
✓ send tokens to minter (559ms) 
✓ token total supply is updated (1481ms)
      </h3>
    </div>
  );
};

export default Card;
