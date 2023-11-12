import React from 'react';
import Logo from 'reactgun4ders2/src/car.png';
import {Navbar,Container,NavbarBrand,Nav,NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';

function Navi({cardScore,getCardLink,clearInCard,cardList,totalCard}) {
    const[dropownOpen,setDropdownOpen] = React.useState(false)

    const changeDropdown =() =>{
        setDropdownOpen(!dropdownOpen);
    };
    const totalBasket =() =>{
        let total=0;
        for ( const value of cardList) {
            total += value.price;
        }
        return total;
    };



    return (
        <Navbar color="light" light expand ="md">
            <Container>
                <NavbarBrand>
                    <img alt='logo' src='reactgun4ders2/src/car.png' style={{ height:'40', width :'40'}} />
                </NavbarBrand>
                <Nav className="ml-auto" style={{float:'inline-end'}} navbar>
                    <NavItem>
                        <NavLink href="/components/">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/products/">Propducts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/basket/">Basket:{(totalCard)} - Total:{(totalBasket)}</NavLink>
                    </NavItem>
                    {getCardLink ? (
                        <NavItem>
                            <Dropdown isOpen={dropdownOpen} toggle={changeDropdown}>
                                <DropdownToggle nav caret>
                                    My Basket
                                </DropdownToggle>
                                <DropdownMenu>
                                    {cardList.map((item,value) =>(
                                        <DropdownItem key={value}>
                                            {value.title} - {value.price}₺
                                        </DropdownItem>
                                    ))}
                                    {cardScore > 0 && <DropdownItem divider/>}
                                    {cardScore > 0 && (
                                        <DropdownItem onClick={clearInCard}>Delete</DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    ):(null)
                    }    
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navi;