import React from "react";
import Button from "../Button/index";
import InputElement from "../Input";
import { FormContainer } from "./styles";

function Form() {
    return(
        <FormContainer>
            <InputElement text="Altura" spanText="cm"/>
            <InputElement text="Peso" spanText="Kg"/>
            <InputElement text="Idade"/>
            <Button text="Calcular"/>
        </FormContainer>

    )
}

export default Form;