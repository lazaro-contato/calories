import React from "react";
import Button from "../Button/index";
import InputElement from "../Input";
import { FormContainer } from "./styles";

function Form() {
    return(
        <FormContainer>
            <InputElement text="Altura" spanText="cm" name="Altura"/>
            <InputElement text="Peso" spanText="Kg" name="Peso"/>
            <InputElement text="Idade" name="idade"/>
            <Button text="Calcular"/>
        </FormContainer>

    )
}

export default Form;