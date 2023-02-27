import styled from "styled-components"

export const Card = styled.div`
    width: 450px;
    height: 450px;
    border-radius: 10px;
    flex-direction:column;
    display: flex;
    background-color:black;
    /* border: 3px solid lemonchiffon; */
    margin: 25px;
    .card-header{
        width: 100%;
        height: 15vh;
        /* border-bottom:2px solid ; */
        display: flex;
        justify-content: center;
        align-items: center;

        .title-card{
            font-size: 1.2em;
             font-family: monospace;
             color: white;
        }

    }

`
export const BgImage = styled.img`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-size: cover;
    background-image: url(${props => props.image}) ;
    /* background-repeat: no-repeat;
    background-position: center center; */
    
    `

export const CardFooter = styled.div`
    width: 100%;
    height: 100%;
    background-color:black;
    display: flex;
    justify-content:center;
    /* border-top: 2px solid white; */
    align-items: center;
    border-radius: 0px 0px 10px 10px;
    .btn-view{
        width: 60%;
        height: 10vh;
        border-radius: 20px 20px 20px 20px;
        border: 2px solid black;
        background-color: white;
        font-family: monospace;
        font-size: 1.5em;
        :hover{
            background-color:   #424242  ;
            color:white;
            transition: 0.5s;
        }
    }
    
`