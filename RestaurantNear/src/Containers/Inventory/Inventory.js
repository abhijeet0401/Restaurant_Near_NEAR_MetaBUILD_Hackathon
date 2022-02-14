import React, { Component } from 'react';
import {Container,Row,Col,Card, ListGroup} from 'react-bootstrap';
import './Inventory.css'

class Inventory extends Component {
    constructor(props){
        super(props)
        this.state={
            userInv:[],
            invName:[],
            invQty:[]

        }
    }

    UpdateInv=async()=>{
        await window.contract.getInventory()
        .then(res=>{
            if(res!==undefined){
            this.setState({
                userInv:res  
            })
            }            
            else{
               return null
            }
        }
        )
    }

    orgInv=()=>{
        let names=[];
        let qty=[];
        this.state.userInv.forEach(
            (x)=>{
           
                if(names.includes(x)){
                    qty[names.indexOf(x)]=qty[names.indexOf(x)]+1
                }
                else{
                    names.push(x);
                    qty.push(1);
                }
            }
        )
       
        this.setState(
            {
                invName:names,
                invQty:qty
            }
        )
    }




    componentDidMount(){
        (window.accountId!=='')? 
        this.UpdateInv():null;
    }

    componentDidUpdate(prevprops,prevstate){
        if(prevstate.userInv!==this.state.userInv){
        this.orgInv();
        }
        
    }

    //userInv=[{name:'Echo Pearl', Qty:8},{name:'Water Shield', Qty:10}]

    render() {
        return (
            <div className=" InventoryContainer d-flex justify-content-center">
                <Card style={{width:'70rem'}}>
                <Card.Header>User's Inventory</Card.Header>
                    <ListGroup>
                        {this.state.invName.map((x,index)=>(<ListGroup.Item key={x}>{x} x {this.state.invQty[index]}</ListGroup.Item>))}
                    </ListGroup>
                 </Card>
            </div>
        );
    }
}

export default Inventory;