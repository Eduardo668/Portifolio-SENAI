import { Tech } from "./style"
import aos from "aos"
import { useEffect } from "react"

export const TechComponent = ({ image, title })=>{

  useEffect(()=>{
    aos.init({
      duration: 3400
    })
  }, [])

  return (
        <>
            <Tech data-aos="fade-left">
              <div className="div-img">
                <img src={image} />
              </div>
              <h3>{title}</h3>
            </Tech>
        </>
    )
}