import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavBarElements";
import Logo  from '../Images/logo.png';
import "../Components/Main.css"; 

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
 
                <NavMenu>

                    <NavLink to="/">
                            <img src={Logo} width="100px" height="60px" alt="Logo" />
                    </NavLink>
                    <NavLink to="/">
                        Properties
                    </NavLink>
                    <NavLink to="/properties">
                        Search
                    </NavLink>
                    <NavLink to="favourites">
                        Favourites
                    </NavLink>
                    <NavLink to="/signup">
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
 
export default Navbar;