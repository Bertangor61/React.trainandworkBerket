import React from 'react';
import {            //reactstrapten kullandığımız özellikleri yazdık.
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Cart from './Cart';
import Logo from '../logo.png';

export default class Header extends React.Component{
    constructor(props) {        //superprops sonra anlatılcak
        super(props);

        this.toggle = this.toggle.bind(this);       //sepetin açılıp kapatılması
        this.state = {
            isOpen:false,       //tıklamadan kapalı  sepet.
        };  
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,         //sepete ürün eklediğinde açılıyor.
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light-expand="md">
                    <NavbarBrand href="/"><img src={Logo} alt="Logo" style={{width:"150px"}} /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components">Components</NavLink>
                            </NavItem>
                            <Cart
                                cart={this.props.cart}      //props olarak gönderdiğimizde içindekileri almak için böyle yazıyoruz. this.props.cart - Bu sayfadaki propslardan bu kartı al
                                removeToCart={this.props.removeToCart}      //silmek için props göndermişiz.
                            />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


