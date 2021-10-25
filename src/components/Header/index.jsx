import React from "react";
import { Container, DivLink } from "./styles";
import AppName from '../AppName/index';
import NavMenu from "../Menu/index";


function Header() {
    return(
            <Container>
            <AppName />
            <DivLink> 
            <NavMenu />
            </DivLink>
            </Container>      
    )
}

export default Header;