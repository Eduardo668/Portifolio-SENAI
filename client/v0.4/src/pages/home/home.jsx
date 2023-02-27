import React, { useEffect } from "react";
import { SidebarMenu } from "../../components/sidebar-menu/Menu";
import {
  ApresentationContainer,
  ApresentationParagraphDiv,
  Titles,
  BoxWellcome,
  Container,
  TecnologiasContainer,
  WellcomeContainer,
  BoxTech,
} from "./style";
import Typewriter from "typewriter-effect";
import MyImg from "../../assets/image-user.png";
import aos from "aos";
import "aos/dist/aos.css";
import JavaImage from "../../assets/java.svg";
import SpringImage from "../../assets/spring.svg";
import JsImage from "../../assets/javascript.svg";
import TsImage from "../../assets/typescript.svg";
import ReactImage from "../../assets/reactjs.svg";
import PgImage from "../../assets/pg.svg";
import HtmlImage from "../../assets/html-1.svg";
import CssImage from "../../assets/css-3.svg";
import DockerImage from "../../assets/docker.svg";
import GitImage from "../../assets/git-icon.svg";
import { TechComponent } from "../../components/tech-component/tech";

export const Home = () => {
  useEffect(() => {
    aos.init({
      duration: 1400,
    });
  });

  return (
    <>
      <SidebarMenu />
      <Container>
        <WellcomeContainer>
          <BoxWellcome align_media800={"center"}>
            <img
              data-aos="zoom-in"
              data-aos-duration="3000"
              src={MyImg}
              className="my-img"
            />
          </BoxWellcome>
          <BoxWellcome align_media800={"flex-start"}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Olá, me chamo Eduardo e")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Seja Bem vindo ao meu portifolio.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Role o scroll para baixo")
                  .start();
              }}
            />
          </BoxWellcome>
        </WellcomeContainer>
        {/* <div className="margin-container"></div> */}
        <ApresentationContainer>
          <div className="box-title">
            <Titles data-aos="fade-right" data-aos-offset="300">
              Carta de apresentação
            </Titles>
          </div>
          <ApresentationParagraphDiv>
            <div className="box-text">
              <p data-aos="fade-right" data-aos-offset="300">
                Olá caro leitor, Meu nome é Eduardo Paixão tenho 17 anos, moro
                em Florianópolis - Santa Catarina - Brasil. Estou no 3° ano do
                ensino médio, cursando Desenvolvimento de Sistemas no Senai, e
                pretendo futuramente me tornar um desenvolvedor de software.
                <br />
                Nesse portifolio você ira poder observar alguns dos projetos que
                desenvolvi durante o 3° ano do ensino medio na Escola S e também
                podera ver projetos pessoais que eu desenvolvi.
                <br />
                Clique nas três barrinhas no canto superior esquerdo para
                mostrar o menu e acessar outras paginas.
              </p>
            </div>
          </ApresentationParagraphDiv>
        </ApresentationContainer>
        <TecnologiasContainer>
          <div className="title-tech-div">
            <Titles data-aos={"fade-left"}>Principais Skills</Titles>
          </div>
          <BoxTech>
            <TechComponent title={"Java"} image={JavaImage} />
            <TechComponent title={"Spring"} image={SpringImage} />
            <TechComponent title={"JavaScript"} image={JsImage} />
            <TechComponent title={"TypeScript"} image={TsImage} />
            <TechComponent title={"ReactJs"} image={ReactImage} />
            <TechComponent title={"Postgres"} image={PgImage} />
            <TechComponent title={"HTML 5"} image={HtmlImage} />
            <TechComponent title={"CSS 3"} image={CssImage} />
            <TechComponent title={"Docker"} image={DockerImage} />
            <TechComponent title={"Git"} image={GitImage} />
          </BoxTech>
        </TecnologiasContainer>
      </Container>
    </>
  );
};
