import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow-x: hidden;
    /* overflow-y: scroll; */
    /* border: 5px solid white; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 800px){
        align-items: flex-start;
    }

    .margin-container{
        width: 100%;
        height: 30vh;
        /* border: 2px solid purple; */
        @media (max-width: 700px){
            height: 70vh;
        }
            
        
    }



`

export const WellcomeContainer = styled.div`
    width: 100%;
    height:100%;
    overflow-y: hidden;
    /* border: 2px solid white; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 200px;
    
    @media (max-width: 800px){
        flex-wrap: wrap;
    }
    @media (max-width: 600px){
        border-top: 50px solid transparent ;
    }

`
export const BoxWellcome = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items:center;
    /* border: 2px solid red; */
     color: white;
     font-size: 3.5em;
     font-family: monospace;
    
    @media (max-width: 800px){
        font-size: 2.5em;
        
        padding: 20px;
        align-items: ${props => props.align_media800};
    }

     .my-img{
        width: 400px;
        height: 400px;
        border-radius: 300px;
         @media (max-width: 800px){
            width: 300px;
            height: 300px;
         }
         /* @media (min-height: 720px) and (max-width:700px){
            width: 300px;
            height: 300px;
            margin-top: 50px;
         } */
     }
    
    


`

export const ApresentationContainer = styled.div`
    width: 80%;
    height:100%;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    /* border: 2px solid blue; */
    justify-content: center;
    align-items: flex-start;
    @media(max-width: 500px){
        align-items: center;
        width: 100%;
    }
    .box-title{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        /* border: 2px solid yellow; */
        @media (max-width: 600px){
            padding: 10px;
        }
    }

`

export const Titles = styled.h1`
    font-size: 3.5em;
    color: white;
    font-family: monospace;
    @media(max-width: 600px){
        font-size: 3em;
    }
    @media(max-width: 420px){
        font-size: 2.3em;
    }

`
export const ApresentationParagraphDiv = styled.div`
    width: 100%;
    height: 100%;
    /* border: 2px solid white; */
    /* padding: 50px; */
    display: flex;
    justify-content: center;
    /* align-items: center; */

    .box-apresentation{
        width: 100%;
        /* display: flex; */
        /* justify-content: flex-start; */
        /* align-items: center; */
        /* height: 100%; */
        /* border: 1px solid yellow; */
        /* margin: 10px; */
        padding: 20px;
    }
    

    p{  
        display:flex;
        justify-content: flex-start;
        font-size: 1.2em;
        line-height: 1.8em;
        color: white;
        /* border: 2px solid red; */
        padding: 20px;
        font-family: monospace;
        @media(max-width: 600px){
        font-size: 1.3em;
        padding: 20px;
    }
    }
    

`

export const TecnologiasContainer = styled.div`
    width: 100%;
    height:100%;
    margin-bottom: 50px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* border: 2px solid red; */
    .title-tech-div{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        /* border: 2px solid yellow; */
        @media (max-width: 600px){
            padding: 10px;
        }
    }

`

export const BoxTech = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* border: 2px solid blue; */
    flex-wrap: wrap;
`

