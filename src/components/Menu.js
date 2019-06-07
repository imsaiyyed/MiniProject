import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import '../App.css';

class Menu extends Component {
    state = { 
        productList:[]
     }
    componentDidMount(){
        axios.get('http://localhost:3000/api/products').then((resp)=>{
            let products=resp.data;
            this.setState({productList:[...products]});
        })
    }
    render() {
        let jsxData=null;
        if(this.props.category){
            jsxData=this.state.productList.map((product)=>{
                return (product.category===this.props.category?<Card className="card">
                    <CardImg top width="100%" height="60%" src={product.imageUrl} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{product.title}</CardTitle>
                      <CardSubtitle>Price:{product.price}</CardSubtitle>
                      {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                      <Button>Add to cart</Button>
                    </CardBody>
                  </Card>:null)
            }) 
        }else{
            jsxData=this.state.productList.map((product)=>{
                return (<Card className="card">
                    <CardImg top width="100%" height="60%" src={product.imageUrl} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{product.title}</CardTitle>
                      <CardSubtitle>Price:{product.price}</CardSubtitle>
                      {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                      <Button>Add to cart</Button>
                    </CardBody>
                  </Card>)
            }) 
        }

        
        return ( 
            <div className="card-container">
                {jsxData}
            </div>
         );
    }
}

function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  }
 
export default Menu;