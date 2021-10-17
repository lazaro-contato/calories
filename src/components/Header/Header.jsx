import React from "react";
import { Container, DivLink } from "./styles";
import AppName from '../AppName/AppName';
import NavMenu from "../Menu/NavMenu";


function Header() {
    return(
        <div>
        <Container>
        <AppName />
        <DivLink> 
        <NavMenu />
        </DivLink>
        </Container>
        
        </div>
        
    )
}

export default Header;