import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #63d471;
    height: 65px;
    width: 100%;
    display: flex;
    position: fixed;
    justify-content: space-between;
    padding: 1px 2px;
    z-index: 12;
    /* Third Nav */
    /* justify-content: flex-start; */
`;
 
export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    font-size:16px;
    font-weight: 500;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #ffffff;
    }
    &:hover {
        color: #686b69;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -25px;
    /* Second Nav */
    /* margin-right: 25px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 25px;
    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtnLink = styled(Link)`
    border-radius: 10px;
    background: #000000;
    padding: 10px 22px;
    color: #e8c433;
    font-size:16px;
    font-weight: 500;
    outline: none;
    border: 2px solid #000000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 25px;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #a8a8a5;
    }
    &.active {
        color: #ffffff;
    }
`;