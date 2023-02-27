import React from "react";
import TypewriterComponent from "typewriter-effect";
import { SidebarMenu } from "../../components/sidebar-menu/Menu";
import { Container } from "./style";
import Table from "react-bootstrap/Table";

export const StudyTimeline = () => {
  return (
    <>
      <SidebarMenu />
      <Container>
        <div className="box-title-timeline">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString("Cronograma de estudos").start();
            }}
          />
        </div>
        <div className="box-timeline">
        <Table responsive  striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th>Horario</th>
                            <th>Segunda</th>
                            <th>Terça</th>
                            <th>Quarta</th>
                            <th>Quinta</th>
                            <th>Sexta</th>
                            <th>Sabado</th>
                            <th>Domingo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Manha</td>
                            <td>Aula</td>
                            <td>Aula</td>
                            <td>Aula</td>
                            <td>Aula</td>
                            <td>Aula</td>
                            <td>Nada</td>
                            <td>Nada</td>
                        </tr>
                        <tr>
                            <td>Tarde</td>
                            <td>Nada </td>
                            <td>Programar / enem</td>
                            <td>Nada</td>
                            <td>enem</td>
                            <td>Programar</td>
                            <td>Nada / Programar</td>
                            <td>enem / Programar</td>
                        </tr>
                         <tr>
                            <td>Noite</td>
                            <td>Nada</td>
                            <td>Nada</td>
                            <td>Nada</td>
                            <td>Nada</td>
                            <td>Nada</td>
                            <td>Nada</td>
                            <td>Nada</td>
                            
                         </tr>
                    </tbody>
                </Table>

        </div>
      </Container>
    </>
  );
};
