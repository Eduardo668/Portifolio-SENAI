import React, { useEffect, useState } from "react";
import { slide as MenuHamburguer } from "react-burger-menu";
import { BiHomeAlt, BiCalendarWeek } from "react-icons/bi";
import { TbSchool, TbHammer, TbPlayerSkipBack } from "react-icons/tb";
import { useLocation } from "react-router-dom";

import {
  DivMenuTitle,
  Header,
  Menu,
  MenuItem,
  MenuTitle,
  SidebarContainer,
} from "./style";

export const SidebarMenu = () => {
  const location = useLocation();
  const [home_active, setHomeActive] = useState({
    active: "",
    icon_active: "20px",
  });
  const [crono_active, setCronoActive] = useState({
    active: "",
    icon_active: "20px",
  });
  const [project_active, setProjectActive] = useState({
    active: "",
    icon_active: "20px",
  });
  const [works_active, setWorksActive] = useState({
    active: "",
    icon_active: "20px",
  });
  const [portifolio_active, setPortifolioActive] = useState({
    active: "",
    icon_active: "20px",
  });

  const handleHomeActive = () => {
    if (location.pathname == "/") {
      setHomeActive({ active: "active", icon_active: "27px" });
    }
  };

  const handleCronoActive = () => {
    if (location.pathname == "/cronograma") {
      setCronoActive({ active: "active", icon_active: "27px" });
    }
  };
  const handleProjectActive = () => {
    if (location.pathname == "/projects") {
      setProjectActive({ active: "active", icon_active: "27px" });
    }
  };
  const handleWorksActive = () => {
    if (location.pathname == "/school-subjects" || location.pathname == `/${localStorage.getItem("materia")}`) {
      setWorksActive({ active: "active", icon_active: "27px" });
    }
  };
  const handlePortifolioActive = () => {
    if (location.pathname == "/portifolio-2021") {
      setPortifolioActive({ active: "active", icon_active: "27px" });
    }
  };

  useEffect(() => {
    handleHomeActive();
    handleCronoActive();
    handleProjectActive();
    handleWorksActive();
    handlePortifolioActive();
  }, []);

  return (
    <Header>
      <MenuHamburguer pageWrapId={ "page-wrap" } width={"300px"}>
      <DivMenuTitle>
        <MenuTitle>Menu</MenuTitle>
      </DivMenuTitle>

      <Menu>
        <MenuItem to="/">
          <div className="menu-item-content">
            <BiHomeAlt size={home_active.icon_active} color="white" />
            <p className={home_active.active}>Home</p>
          </div>
        </MenuItem>
        <MenuItem to="/cronograma">
          <div className="menu-item-content">
            <BiCalendarWeek size={crono_active.icon_active} color={"white"} />
            <p className={crono_active.active}>Cronograma</p>
          </div>
        </MenuItem>
        <MenuItem to="/school-subjects">
          <div className="menu-item-content">
            <TbSchool color="white" size={works_active.icon_active} />
            <p className={works_active.active}>Trabalhos academicos</p>
          </div>
        </MenuItem>
         {/* <MenuItem to="/projects">
          <div className="menu-item-content">
            <TbHammer color="white" size={project_active.icon_active} />
            <p className={project_active.active}>Projetos pessoais</p>
          </div>
        </MenuItem> */}
        {/* <MenuItem to="/portifolio-2021">
          <div className="menu-item-content">
            <TbPlayerSkipBack
              color="white"
              size={portifolio_active.icon_active}
            />
            <p className={portifolio_active.active}>Portifolio 2021</p>
          </div>
        </MenuItem> */}
      </Menu>
    </MenuHamburguer>
    </Header>
    
  );
};
