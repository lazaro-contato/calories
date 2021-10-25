import React from "react";
import LogoImg from "../../assets/calories.png"

import { AppName, LogoImage, LogoNameContainer } from "./styles";

function AppNameLogo() {
    return(
        <div>
        <LogoNameContainer>
            <LogoImage src={LogoImg}></LogoImage>
            <AppName>CalorieS</AppName>
        </LogoNameContainer>
        </div>
  
    )
}

export default AppNameLogo;
