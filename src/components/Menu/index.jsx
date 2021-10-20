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
        <Link link="https://www.google.com" name="Protótipo" />
      </li>
      <li>
        <Link link="https://www.facebook.com" name="Portifólio" />
      </li>
      <li>
        <Button text="Contato"/>
      </li>
      </MenuStyle>
  );
}

export default NavMenu;
