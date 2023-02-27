import styled from "styled-components";

export const Card = styled.div`
    width: 70%;
    height: 500px;
    flex-direction: column;
    display:flex;
    border-radius: 20px;
    border: 2px solid white;
    margin-bottom: 100px;


`

export const HeaderCard = styled.div`
    width: 100%;
    height: 15vh;
    border-radius: 16px 16px 0px 0px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    

`

export const BgImage = styled.div`
    width: 100%;
    height:100%;
    border-radius:0px 0px 20px 20px;
    background-size: cover;
    background-image: url(${props => props.image}) ;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .btn-view{
        width: 50%;
        height: 10vh;
        border-radius: 20px 20px 0px 0px;
        border: transparent;
        background-color: white;
        font-size: 2em;
        font-family: monospace;
        :hover{
            background-color: #4b4b4b;
            transition: 0.5s;
        }
        @media(max-width: 500px){
            font-size: 1.4em;
        } 
        @media(max-width: 500px){
            font-size: 1.2em;
        }
    }

`