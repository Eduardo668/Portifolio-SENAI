import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import TypewriterComponent from "typewriter-effect";
import { FetchTrabalhos } from "../../../api/fetchTrabalhos";
import { CardJob } from "../../../components/card-trabalho/card-trabalho";
import { SidebarMenu } from "../../../components/sidebar-menu/Menu";
import { CardContainer, ContainerJobs } from "./style";

export const JobsPage = () => {
  const [trabalhos, setTrabalhos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleTrabalhos = () => {
    FetchTrabalhos().then((data)=>{
       setTrabalhos(data)
       setLoading(true);
    });
   
    
    // console.log(trabalhos);
  };

 

  useEffect(() => {
    handleTrabalhos();
  }, []);

  return (
    <>
      <SidebarMenu />
      <ContainerJobs>
        <div className="title-div">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString(localStorage.getItem("materia")).start();
            }}
          />
        </div>
        <CardContainer>
          {
          isLoading ? 
            trabalhos.map(trabalhos => 
              <CardJob key={trabalhos.id} job={trabalhos} />
            )
           : (
            <Spinner className="spinner" animation="border" variant="primary" />
          )
          }
        </CardContainer>
      </ContainerJobs>
    </>
  );
};
