import styled from "styled-components";

export const ContainerJobs = styled.div`
    width: 100%;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    /* border: 3px solid white;     */
    /* position: absolute; */

    .title-div{
        display: flex;
        justify-content: center;
        align-items:center;
        font-size: 4em;
        padding: 20px;
        color: white;
        width: 100%;
        height: 100%;
        @media (max-width: 600px){
            margin-top: 80px;
            font-size:3.4em;
        }
        /* border: 2px solid red; */
    }

`

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    /* border: 2px solid blue; */
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    .spinner{
        margin: 100px;
    }
    
    

`