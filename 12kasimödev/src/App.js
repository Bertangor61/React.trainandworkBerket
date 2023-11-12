import './App.css';
import Product from './Component./Product'
import Navi from './Component./Navi'
import Category from './Component./Category'
import { useState } from 'react';
import {Container,Row,Col } from 'reactstrap';

function App() {
  const categories = [
    {id:1,title:'Category 1',desc:'Description 1'},
    {id:2,title:'Category 2',desc:'Description 2'},
    {id:3,title:'Category 3',desc:'Description 3'},
    {id:4,title:'Category 4',desc:'Description 4'},
    {id:5,title:'Category 5',desc:'Description 5'},
    {id:6,title:'Category 6',desc:'Description 6'},
    {id:7,title:'Category 7',desc:'Description 7'},
    {id:8,title:'Category 8',desc:'Description 8'},
    {id:9,title:'Category 9',desc:'Description 9'},
    {id:10,title:'Category 10',desc:'Description 10'}
  ];
  const products = [
    {id:1,title:'Product 1', desc:'Descrption 1'},
    {id:2,title:'Product 2', desc:'Descrption 2'},
    {id:3,title:'Product 3', desc:'Descrption 3'},
    {id:4,title:'Product 4', desc:'Descrption 4'},
    {id:5,title:'Product 5', desc:'Descrption 5'},
    {id:6,title:'Product 6', desc:'Descrption 6'},
    {id:7,title:'Product 7', desc:'Descrption 7'},
    {id:8,title:'Product 8', desc:'Descrption 8'},
    {id:9,title:'Product 9', desc:'Descrption 9'},
    {id:10,title:'Product 10', desc:'Descrption 10'}
  ];
  const[cardScore,setcardScore]=useState(0);
  const[getCardLink,setGetCardLink]=useState(false);
  const[cardList,setCardList]=useState([])

//   const totalCard=() =>{              //burası değişecek ve navi içerisine gönderilecek
//     let total=0;
//     for ( const value of cardScore) {
//         total += value.number;
//     }
//     return total;
// };

  const addInCard = (product) =>{           //kart ekleme ile ilgili kısım
    setcardScore(cardScore+1);
    setGetCardLink(true);
    setCardList([...cardList,product]);
  }
  const clearInCard = () =>{          //kart silme ile ilgili kısım
    setcardScore(0);
    setGetCardLink(false);
    setCardList([ ]);
  }

  return (
    <Container>
      <Navi>cardScore={cardScore} getCardLink={getCardLink} cardList={cardList} totalCard={totalCard}</Navi>
      <Row>
        <Col>
          <Category categories={categories}/>
        </Col>
        <Col>
          <Product products={products} addInCard={addInCard}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
