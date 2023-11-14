import './App.css';
import Product from './Component/Product'
import Navi from './Component/Navi'
import Category from './Component/Category'
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const categories = [
    { id: 1, title: 'Automobiles', desc: 'Description 1', icon:'fa-solid fa-car' },
    { id: 2, title: 'MotorCycles', desc: 'Description 2', icon:'fa-solid fa-motorcycle'},
    { id: 4, title: 'Minibuses', desc: 'Description 3',icon:'fa-solid fa-van-shuttle' },
    { id: 3, title: 'Buses', desc: 'Description 4',icon:'fa-solid fa-bus' },
    { id: 5, title: 'Bicycles', desc: 'Description 5',icon:'fa-solid fa-bicycle' },
    { id: 5, title: 'Tractor', desc: 'Description 6',icon:'fa-solid fa-tractor' },
    { id: 9, title: 'Trucks', desc: 'Description 7',icon:'fa-solid fa-truck' },
    { id: 10, title: 'Big Trucks', desc: 'Description 8',icon:'fa-solid fa-truck-moving' }
  ];
  const products = [
    { id: 1, title: 'Fiat Egea Sedan', price: 50 , img:'https://otomobil.fiat.com.tr/content/dam/fiat/TR/my-23/tipo/tipo-sedan/coloris/okyanus-mavisi/680x430.png'},
    { id: 2, title: 'Alfa Romeo Tonale 1.5 VGT', price: 70 , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9shdwsdNSmu9nV6R5lqrb8IDDSagZiJJheQ&usqp=CAU' },
    { id: 3, title: 'Audi E-Tron', price: 60 , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcev03zqr3nQfS3doiaqUpGi1n3NsR1UI7YuCFQLxoG_2JND0h1I86EMgYqcSm_bvk9sw&usqp=CAU'},
    { id: 4, title: 'Audi Q3 35 TFSI', price: 120 , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQKiISCby7WlG9kswAq-ctmn_Ez7Zh1T2AA&usqp=CAU' },
    { id: 5, title: 'BMW X1', price: 80  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iQNfdJ5AKYe598tj2Zpzhag6i-MI63PQHg&usqp=CAU'},
    { id: 6, title: 'BMW X3', price: 96  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKnRvul94AtIGhf6efL0mQ7uVP4j5HFxWfQ&usqp=CAU'},
    { id: 7, title: 'Cadillac Escalade', price: 61  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxh6UYqcryRaFQyyWdqSkzn_RJr0bpMjJdEQ&usqp=CAU'},
    { id: 8, title: 'Chevrolet Captiva 2.0 D', price: 33  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxMTZHssQ2eEVVHYZUUBIQw9HCpZhD8tplKD0B-7PbLTxWJIAIsAJmP9ggWczA2dtu2Q&usqp=CAU'},
    { id: 9, title: 'Citroen C3 AirCross 1.2 PureTech', price: 45 , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4xF6dfPbABdLipzoumeKwxJ7Z19OQEX7Tg&usqp=CAU' },
    { id: 10, title: 'Dacia 1.6 Sce', price: 14  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmRVo3e33vnPiJgpoOCgPlzIEj2dBGPwIb4VHzCTCzArWQ1s82iA17cx3YJCbE5rMLZE&usqp=CAU'},
    { id: 10, title: 'Renoult Captur', price: 29  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-PP0IjcWBX7yu-oeIK6eL1Dsywk0DDj-bow&usqp=CAU'}
  ];
  const [cardScore, setcardScore] = useState(0);
  const [getCardLink, setGetCardLink] = useState(false);
  const [cardList, setCardList] = useState([])

  //   const totalCard=() =>{              //burası değişecek ve navi içerisine gönderilecek
  //     let total=0;
  //     for ( const value of cardScore) {
  //         total += value.number;
  //     }
  //     return total;
  // };

  const addInCard = (product) => {
    setcardScore(cardScore + 1);
    setGetCardLink(true);
    setCardList([...cardList, product]);
  }

  const clearInCard = () => {          //kart silme ile ilgili kısım
    setcardScore(0);
    setGetCardLink(false);
    setCardList([]);
  }
  console.log(getCardLink)
  return (
    <Container>
      <Navi cardScore={cardScore} getCardLink={getCardLink} cardList={cardList} clearInCard={clearInCard}></Navi>
      <Row>
        <Col xs='4'>
          <Category categories={categories} />
        </Col>
        <Col xs='8'>
          <Product products={products} addInCard={addInCard} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
