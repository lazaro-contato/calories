import React from "react";
import LogoImge from "../../assets/calories.svg"
import { Description, ImgFire, MainDescriptionDiv } from "./styles";

function FireElement() {
    return(

        <MainDescriptionDiv>
            <ImgFire src={LogoImge} />
            <Description>Para perder peso, o ideal é consumir 20% de calorias a menos do que se consome diariamente.</Description>
        </MainDescriptionDiv>
        

    )
}


export default FireElement;