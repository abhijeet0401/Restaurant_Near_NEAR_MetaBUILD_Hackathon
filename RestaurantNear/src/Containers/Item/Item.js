import React, { Component,useState  } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Item=(props)=> {




    const addItem=()=>{
        props.addItem(props.name,props.price, props.size)
        console.log(props.addItem)
    }

        return (
            <div>
         
               <Card>
      <CardMedia
        component="img"
     
        src={props.picture}
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
  
      </CardContent>
      <CardActions>
        <Button size="small">{props.price}</Button>
        <IconButton color="primary" aria-label="add to shopping cart" onClick={addItem}>
  <AddShoppingCartIcon />
</IconButton>
        <Button size="small" onClick={addItem}>Add to Cart</Button>
      </CardActions>
    </Card>
                       
            </div>
        );
    
}

export default Item;