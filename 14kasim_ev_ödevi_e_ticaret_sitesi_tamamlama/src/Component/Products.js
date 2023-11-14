import React, {Component} from 'react';
import { 
    CardGroup,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
 } from 'reactstrap';

export default class Products extends Component {
    render()    {
        const { products} =this.props;  //bu sayfadaki propların hepsini product un içine aktar.    
        return (
            <div>
                <h2>{this.props.currenCategory}</h2>    {/*Hangi category ye tıkladıysak onları çağırıyo.Tıklandığı an h2 içerisindeki category adı da değişiyor.*/}
                <CardGroup>
                    {products.map((product) => (    //gelen ürünleri bir map ile döndük
                        <Col xs="3">
                            <Card
                                style={{marginLeft:"10px" , marginRight:"10px"}}
                                key={product.id}        //react bize kızmasın diye bir key verdik. Key i de id olarak verdik.
                            >
                                <CardImg        //name ini cardIMG ye gönderdik.    
                                    top
                                    width="100%"
                                    src={product.image}
                                    alt={product.productName}       //herbir img e alt etiketi girmek daha sağlıklıdır.
                                />
                                <CardBody>
                                    <CardTitle>{product.productName}</CardTitle>        {/*title olarak name yazdırdık.*/}
                                    <CardText>{product.desc}</CardText>
                                        <CardText>
                                            <small className="text-muted">{product.price} ₺</small>     {/*kücük olarak fiyatını yazdırdık.*/}
                                        </CardText>
                                    <Button onClick={() => this.props.addToCart(product)}>      {/*App.js den gelen bir function ekledik. product gönderip sepete ekle dedik.*/}
                                        Sepete Ekle
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </CardGroup>
            </div>
        )
    }
}