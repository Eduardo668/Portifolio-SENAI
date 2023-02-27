import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* border: 2px solid white; */

    .box-title-timeline{
        width: 100%;
        height: 30%;
        font-size: 3.5em;
        font-family: monospace;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 2px solid white; */
        @media (max-width: 760px){
            font-size: 2.6em;
        }
        @media (max-width: 560px){
            font-size: 2.2em;
        }
        @media (max-width: 560px){
            font-size: 1.7em;
        }
       
       
    }

    .box-timeline{
        width: 100%;
        height: 50%;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }



`
