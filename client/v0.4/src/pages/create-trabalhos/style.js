import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* border:2px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;


`

export const ContainerForm = styled.div`
    width: 400px;
    height: 550px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    @media (min-height: 900px){
        height:600px;
    }


    .form-title-div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20vh;
    }
    .btn-cadastrar{
        border:transparent;
        border: 1px solid white;
        background-color:black;
        color: white;
        :hover{
            background-color: gray;
            transition: 0.5s;
        }
       
    }


`
export const Form = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* border: 2px solid blue; */
    justify-content: flex-start;
    align-items: center;

   
    .div-input-label{
        display: flex;
        height: 10vh;
        width: 80%;
        /* border: 2px solid red; */
        flex-direction:column;
        margin: 5px;
    }
    .input{
        border-radius: 5px;
        border:2px solid black;
        outline: none;
    }
    .label{
        font-family: monospace;
        font-size: 1em;
    }
    
    

`
