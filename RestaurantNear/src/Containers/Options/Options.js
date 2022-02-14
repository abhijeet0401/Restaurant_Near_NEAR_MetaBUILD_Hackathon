import React, { Component } from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import './Options.css'
import Item from '../Item/Item'
import pizza from '../../assets/pizza.jpg'
import burger from '../../assets/burger.jpg'
import donut from '../../assets/donut.jpg'

class Options extends Component {



    listItems=[
        {name:'Pizza',price:30,description:'Pizza with extra topping and cheese',picture:pizza},
        {name:'Burger',price:50,description:'Not just burger                    ',picture:burger},
        {name:'Donuts',price:80,description:'Donuts with extra choco chips       ',picture:donut}
]



    render() {       
        return (
            <div className="optionContainer">
                <Container>
                <Row >
               
                    {this.listItems.map(x=>( 
                        <Col  key={x.name} > 
                        
                            <Item picture={x.picture} addItem={this.props.addItem} name={x.name} size={x.size} price={x.price} description={x.description} key={x.name}></Item></Col>
                            
                    ))}

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Options;