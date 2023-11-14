import React from 'react';
import Logo from '../car.png';
import { Navbar, Container, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Navi({ cardScore, getCardLink, clearInCard, cardList }) {
    const [dropdownOpen, setDropdownOpen] = React.useState(false)

    const changeDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const totalBasket = () => {
        let total = 0;
        for (const value of cardList) {
            total += value.price;
        }
        return total;
    };
    console.log(getCardLink)


    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand>
                    <img alt='Logo' src={Logo} height='80' width='80' />
                </NavbarBrand>
                <Nav className="ml-auto" style={{ float: 'inline-end' }} navbar>
                    <NavItem>
                        <NavLink href="/components/">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/products/">Propducts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/basket/">Basket:{(cardScore)} - Total:{(totalBasket)}</NavLink>
                    </NavItem>
                    {getCardLink ? (
                        <NavItem>
                            <Dropdown isOpen={dropdownOpen} toggle={changeDropdown}>
                                <DropdownToggle nav caret>
                                    My Basket
                                </DropdownToggle>
                                <DropdownMenu>
                                    {cardList.map((item, value) => (
                                        <DropdownItem key={value}>
                                            {item.title} - {item.price}₺
                                        </DropdownItem>
                                    ))}
                                    {cardScore > 0 && <DropdownItem divider />}
                                    {cardScore > 0 && (
                                        <DropdownItem onClick={clearInCard}>Delete</DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    ) : ("")
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navi;