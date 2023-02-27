import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    /* border: 2px solid white; */

    .title-page-div{
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 2px solid white; */
        font-size: 3em;
        color: white;
        font-family: monospace;
        @media (max-width: 900px){
            font-size:2.3em;
        }
        @media (max-width: 700px){
            font-size:1.8em;
            padding: 40px;
        }

    }

`

export const CardContainer = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction:column;
    /* border: 2px solid red; */
    justify-content: space-evenly;
    align-items: center;

`

