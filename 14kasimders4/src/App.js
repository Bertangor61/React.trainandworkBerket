import './App.css';
import React from 'react';
import {Component} from 'react';
import { Container,Row,Col } from 'reactstrap';
import Categories from './Component/Categories';
import Products from './Component/Products';
import Header from './Component/Header';

export default class App extends Component {
  state = {
    currentCategory:'',
    products:[],
    cart:[],
  };
  changeCategory =(category) => {
    this.setState({currentCategory: category.categoryName});
    this.getProducts(category.id);
  };
  getProducts = (categoryId) =>{
    let url = "http://localhost:3000/products";
    if(categoryId)  {
      url += "?categoryId" + categoryId ;
    }
   const response = fetch(url)
      .then((response) => response.json())
      .then((data) =>this.setState({products:data}) );
      console.log(response,this.state.products)
  };
  componentDidMount() {
    this.getProducts();
  }

  addToCard = (product) =>{
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if(addedItem){
      addedItem.quantity += 1;
    }
    else{
      newCart.push({ product: product,quantity:1});
    }
    this.setState({ cart: newCart});
  };
  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart});
  };

  render() {
    return(
      <Container>
        <Header cart={this.state.cart} removeToCart={this.removeToCart}/>
        <Row>
          <Col xs='3'>
            <Categories 
              changeCategory = {this.changeCategory}
              currentCategory={this.state.currentCategory}/>
          </Col>
          <Col xs='9'>
              <Products
              addToCard={this.addToCard}
              products={this.state.products}
              currentCategory={this.state.currentCategory}
              />
          </Col>
        </Row>
      </Container>
    );
  }
}
;