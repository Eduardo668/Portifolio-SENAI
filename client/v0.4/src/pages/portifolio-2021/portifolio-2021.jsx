import React from "react"

export const Portifolio2021 = ()=>{
    return (
        <div style={
            {
                "display": "flex",
                "justifyContent": "center",
                "alignItems":"center",
                "width": "100%",
                "height": "100vh",
                "fontSize": "6em",
                "color": "white",
                "fontFamily":"monospace"
            }
        } >
            <TypewriterComponent
                onInit={(typewriter)=>{
                    typewriter.typeString("EM BREVE").start();  
                }}
             />

        </div>
    )
} 