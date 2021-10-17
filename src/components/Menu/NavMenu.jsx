import React from "react";
import { MenuStyle } from "./styles";

import Link from "../HeaderLink/HeaderLink";
import Button from "../Button/Button";
import HambMenu from "../HambMenu/HambMenu";


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
        <Button />
      </li>
      </MenuStyle>
  );
}

export default NavMenu;
