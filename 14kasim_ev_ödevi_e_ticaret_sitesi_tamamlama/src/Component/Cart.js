import React, { Component } from "react";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    
} from 'reactstrap';

export default class Cart extends Component {
    render () {
        return(
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepet-{this.props.cart.lenght}      {/*içindeki sayıyı sayıyor javascrip in kendi özelliği ().lengh)*/}
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map((cartItem) => (        //cartItem hepsini map ile döndürdüm
                        <DropdownItem key ={cartItem.product.id}>
                            <span 
                                onClick={() => this.props.removeToCart(cartItem.product)}       //onClick ile silme özelliği verdik Git product ü sil demişiz.
                                className="badge badge-danger"
                                style={{marginRight:"10px", backgroundColor:"red"}}
                            >
                                X
                            </span>
                            {cartItem.product.productName}      {/*ismini yazdırdık*/}
                            <span
                                className="badge badge-warning"
                                style={{backgroundColor:"green"}}
                            >
                                {cartItem.quantity}             {/*adetini yazdırdık*/}
                            </span>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider/>
                    <span>Sepeti Boşalt</span>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}