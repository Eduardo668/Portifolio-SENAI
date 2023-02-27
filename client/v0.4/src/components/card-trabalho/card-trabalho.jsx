import React, { useEffect } from "react";
import { BgImage, Card, CardFooter } from "./style";
import HumanasCapa from "../../assets/humanas-capa.jpg";
import aos from "aos";

export const CardJob = ({ job }) => {

  const navigateToThelink = ()=>{
     window.open(job.link, "_blank")
  }

  useEffect(()=>{
      aos.init({
        duration: 1400
      });
  },[])
  return (
    <>
      <Card data-aos="fade-up"  >
        <div className="card-header">
          <h1 className="title-card">{ job.title } </h1>
        </div>
        <BgImage image={job.image_url} />
        
        <CardFooter>
          <button onClick={navigateToThelink} className="btn-view">Ver original</button>
        </CardFooter>

      </Card>
    </>
  );
};

// <Card>
// <div className="card-header">
//   <h1 className="title-card">Animação de matematica</h1>
// </div>
// <BgImage image={ HumanasCapa } >
//   <button className="btn-view">Ver original</button>
// </BgImage>
// </Card>
