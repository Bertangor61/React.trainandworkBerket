import React ,{Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class Categories extends Component{
    state = {               //yeni state yapısı
        categories: [],
    };
    componentDidMount() {       
        this.getCategories();   //sayfa ilk açıldığında bu fonksiyonu çalıştır
    }
    getCategories = () =>{  //bu fonksiyon çalışırken Jsondaki tüm verilerimizi çekiyor.
        fetch('http://localhost:3000/categories')
        .then((response) => response.json())        //datayaçevirdi
        .then((data) => this.setState({categories :data}));     //state ini attı . Artık o veriler.Web sitesinin sol tarafına categories leri yazdırdık ve onclick özelliği verdik.
    };
    render() {
        return(
            <div>
                <ListGroup>
                    {this.state.categories.map((category)=> (       //category leri map ile döndük. İçinde ne bilgi varsa hepsini map(category) ye attık
                        <ListGroupItem
                            active={            // active bootsrap ten geliyor. Web sitesinde Solda category seçtiğimizde seçili category nin etrafının mavi olması.
                                category.categoryName === this.props.currentCategory
                                    ? true
                                    : false
                            }
                            onClick={() => this.props.changeCategory(category)}
                            key={category.id}
                        >
                            {category.categoryName}     {/*category name döndürmüşüz döngünün içerisine.Kategory leri map edip önümüze döküyor.*/ } 
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        )
    }
}