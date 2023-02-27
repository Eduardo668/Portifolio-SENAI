import React from "react";
import TypewriterComponent from "typewriter-effect";
import { CardMateria } from "../../components/card-materia/card-materia";
import { SidebarMenu } from "../../components/sidebar-menu/Menu";
import { CardContainer, Container } from "./style";
import TecnicoImage from "../../assets/tecnico-capa.jpg";
import HumanasImage from "../../assets/humanas-capa.jpg";
import NaturezaImage from "../../assets/natureza-capa.jpg";
import MatematicaImage from "../../assets/matematica-capa.jpg";
import LinguagensImage from "../../assets/linguagens-capa.jpg";

export const SchoolSubjects = () => {
  return (
    <>
      <SidebarMenu />
      <Container>
        <div className="title-page-div">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString("Escolha uma das áreas abaixo").start();
            }}
          />
        </div>
        <CardContainer>
          <CardMateria materia={"Tecnico"} capa={TecnicoImage} />
          <CardMateria materia={"Humanas"} capa={HumanasImage} />
          <CardMateria materia={"Natureza"} capa={NaturezaImage} />
          <CardMateria materia={"Matematica"} capa={MatematicaImage} />
          <CardMateria materia={"Linguagens"} capa={LinguagensImage} />
        </CardContainer>
      </Container>
    </>
  );
};
