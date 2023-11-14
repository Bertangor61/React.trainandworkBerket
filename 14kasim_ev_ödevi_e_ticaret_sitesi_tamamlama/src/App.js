import './App.css';
import React from 'react';
import {Component} from 'react';
import { Container,Row,Col } from 'reactstrap';
import Categories from './Component/Categories';
import Products from './Component/Products';
import Header from './Component/Header';

export default class App extends Component { //Burada Component referansı alıyoruz
  state = {                   //class kulandığıızda kullanabildiğimiz yeni state yapısı , eskiden tek tek state usestate tanımlayıp tek tek hepsini belirlerdik.
    currentCategory:'',       //şimdi neyi kullanacaksak sadece ismini yazıp gireceğimiz veri türünü yazmamız yeterli olur.     
    products:[],              //burayi da bir array(dizi) olarak düşünebiliriz.
    cart:[],
  };
  changeCategory =(category) => {               //kategori değiştirme fonksiyonu oluşturuldu. Category diye bir parametre var.currentCategory içerisine gelen category yi atıyoruz.//Eskiden state i güncellerken biz state in adını yazıyorduk artık state adı yazmak zorunda değiliz. this dediğimiz bu sayfadaki anlamındadır.
    this.setState({currentCategory: category.categoryName});    //active özelliği için yapıldı bu kısım. category seçildiğinde arkasını maviye boyayabilmek için
    this.getProducts(category.id);      //Produc e id gönderiyoruz. Hangi category yi çağıracağımızı söylüyoruz.
  };

  //yeni bir yapı: bu yine bir fonksiyon. Class kullandığımız için eskisi gibi tekrardan fonksiyon yazmamıza gerek yok.
  getProducts = (categoryId) =>{    //Fonksiyon içerisine tıklanan category yi aldık.
    let url = "http://localhost:3000/products"; //Json server in kendi url si bu. İçindeki değişkenler bizim. 
    if(categoryId)  {     //Bu url ye category id si eşit olanları çek diyoruz. Örnek id si 2 olan category ye tıkladığımızda id si 2 olanların tümünü çekiyor.
      url += "?categoryId" + categoryId ;   //get categoryid===2 olanların hepsini getiriyor. Mesela filimlerde categoryid olmaz tür olur tür aksiyon gibi. Bu aslında bi sorgu.
    }
  fetch(url)    //tıkladığım category nin id sinin url si elimd şuanda. Elimizde olan o url yi çağırıyoruz.Veri geliyor.
      .then((response) => response.json())    //gelen veriler bur responce olarak geliyor. Biz bu verileri Json a çeviriyoruz.
      .then((data) =>this.setState({products:data}));    //gelen dataları state den ürünlere at diyoruz.
  };
  componentDidMount() {   //basit bir yapı.Dışarıdan veri çekiliyorsa bunu kullanmak gerekiyor. Eğer dışarıdan veri alınıyorsa önce git bu verileri çek ondan sonra render ı yaz demek için bu yapı kullanılıyor.
    this.getProducts();   //getProduct üzerinden bu verileri alıyor(bütün bölümleri alıyor.) ondan sonra sayfa render oluyor.
  }

  //Sepete ürün ekledik. Sepete ürün ekle dediğimde 1 arttı. Aynı üründne bir tane daha eklersem ürün 2 oldu. Gerçek hayatta kullandığımız gibi.
  addToCart = (product) =>{  //addtocart fonksiyonu oluşturduk.Product onun parametresi.         
    let newCart = this.state.cart;      //AddToCard a tıkladığımızda product içinde veri olarak geliyor.     
    var addedItem = newCart.find((c) => c.product.id === product.id);  //yeni sepet içerisinde product id si esit olan varsa onu buluyoruz.
    if(addedItem){      //eklediğimiz item varsa;
      addedItem.quantity += 1;  // (eklediğimiz item adet olarak sepette tanımlanmış) item sepette varsa adetini bir tane arttırıyoruz.
    }
    else{   // eklediğimiz item sepette yoksa altına yeni ürün olarak 1 adet olacak sekilde ekle demişiz.
      newCart.push({ product: product,quantity:1}); //new kart a push et demişiz. **Push kullandık. Class yapısında kullanılabilir.
    }
    this.setState({ cart: newCart});    //bunu da yeni sepet olarak döndürmüşüz.
  };

  removeToCart = (product) => {   //bu kısım karttan eleman silme kısmı. removeToCart fonksiyonu oluşturduk. Product onun parametresi.
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id); //yeni sepet içerisinde product id si esit olmayan varsa onu buluyoruz. Eşit olmayanı çıkartıp
    this.setState({ cart: newCart});    //eşit olmayanı çıkartıp tekrardan içine aktarıyor.
  };

  render() {    //Propları kullandık
    return(
      <Container>
        <Header cart={this.state.cart} removeToCart={this.removeToCart}/> {/*Prop metodu kullanıldı. Cart olarak headera aktardık(state) - removetocart fonksiyon olarak aktardık.*/ }
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