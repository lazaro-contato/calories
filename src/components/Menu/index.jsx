import React from "react";
import { MenuStyle } from "./styles";

import Link from "../HeaderLink/index";
import Button from "../Button/index";
import HambMenu from "../HambMenu/index";


function NavMenu() {
  return (
    <MenuStyle>
    <HambMenu />
      <li>
        <Link link="https://www.figma.com/file/Oax133nUde3F3LQnfHFSuH/CalorieS?node-id=0%3A1" name="Protótipo" />
      </li>
      <li>
        <Link link="https://github.com/lazaro-contato/" name="Portifólio" target="_blank"/>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lazaro-contato/"><Button text="Contato"/></a>
      </li>
      </MenuStyle>
  );
}

export default NavMenu;
