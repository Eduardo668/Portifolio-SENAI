import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BgImage, Card, HeaderCard } from "./style";
import aos from "aos"


export const CardMateria = ({ materia, capa })=>{



    const handleMateria = ()=>{
        localStorage.setItem("materia", materia);
        window.location.href = `/${localStorage.getItem("materia")}`
       
    }

    useEffect(()=>{
        aos.init({
            duration: 1100
        })
    }, [])

    return(
        <>
        <Card data-aos="fade-up" >
            <HeaderCard>
                <h1>{ materia }</h1>
            </HeaderCard>
            <BgImage image={capa} >
                <button onClick={ handleMateria } className="btn-view">Ver trabalhos</button>
            </BgImage>
        </Card>
        </>
    )


}