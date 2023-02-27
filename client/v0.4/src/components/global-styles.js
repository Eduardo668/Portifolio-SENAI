import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    body{
        background-color: rgb(19, 19, 19);
        
    }
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      @media (max-width: 600px){
        position: relative;
        top:0;
        left: 0;
        margin-left:20px;
      }
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #ffffff;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
      background: gray;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 30px;
      /* z-index: 1000px; */
      /* border: 2px solid white; */
      width: 30px;
      padding: 12.5px;
      border: 3px solid white;
      border-radius: 100px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
      background: #ffffff;
     
    }
    
    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
       /* border: 2px solid red; */
       overflow-y: hidden;  
       position: fixed;
       top: 0;
       bottom: 0;
      
      
    }

    /* General sidebar styles */
    .bm-menu {
        position: fixed;
        top: 0;
        bottom: 0;
        background-color:  #1d1d1d ;
        padding-top:50px;
        overflow-y: hidden;
        /* background-color: red; */
 
    }

    /* Morph shape necessary with bubble or elastic */
    /* .bm-morph-shape {
      fill: #373a47;
    } */

    /* Wrapper for item list */
    .bm-item-list {
      display: flex ;
      flex-direction: column;
      


      /* padding: 0.8em; */
    }

    .bm-item {
      /* border: 2px solid yellow; */
      padding: 0px;
      margin: 0px;
      border: transparent;
    }

    .bm-morph-shape {
        fill: #373a47;
        display: none;
    }
  
    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
      display: none;
    
    }
`
