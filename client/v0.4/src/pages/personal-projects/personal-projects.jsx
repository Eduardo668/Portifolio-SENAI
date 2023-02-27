import React from "react";
import TypewriterComponent from "typewriter-effect";
import { SidebarMenu } from "../../components/sidebar-menu/Menu";


export const PersonalProjects = ()=>{
    return(
        <>
        <SidebarMenu />
        <div style={
            {
                "display": "flex",
                "justifyContent": "center",
                "alignItems":"center",
                "width": "100%",
                "height": "100vh",
                "fontSize": "4em",
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
        </>


    )
}