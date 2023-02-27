import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const DivMenuTitle = styled.div`
    border: 2px solid transparent;
    display: flex;

`

export const MenuTitle = styled.h1`
    font-size:3em;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* border: 2px solid blue; */
    margin-bottom: 10px;
    padding-left: 10px;
` 

export const Menu = styled.div`
    width: 100%;
    display: flex;
    /* border: 2px solid red; */
`

export const Header = styled.div`
    @media (max-width: 600px){
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        z-index: 5000000;
        position: fixed;
        top: 0;
        background-color: black;
    }



`


export const MenuItem = styled(NavLink)`
    width: 300px;
    border: 2px solid white;
    height: 50px;
    border: transparent;
    outline: none;
    text-decoration: none;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #1d1d1d ;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    :hover{
        background-color: #373737 ;
        transition: 0.5s;
    }

    p{
        font-size: 1em;
        color: #dcdcdc;
        text-align: center;
        margin-left: 10px;
    }
    .active{
        color: white;
        font-weight: bold;
        font-size:1.2em;
    }
    

    .menu-item-content{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        /* border: 2px solid red; */
        margin-left: 10px;
    }

`

