import React from "react";
import Button from "../Button/index";
import InputElement from "../Input";
import { FormContainer } from "./styles";
import { useForm } from "react-hook-form"

function Form() {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => console.log(data);

    return(
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <InputElement name="altura" ref={{...register('altura', { required: true })}} type="number" text="Altura" spanText="cm" />
            <InputElement name="peso" ref={{...register('peso', { required: true })}} type="number" text="Peso" spanText="Kg" />
            <InputElement name="idade" ref={{...register('idade', { required: true })}} type="number" text="Idade" />
            <input type="submit"></input>
        </FormContainer>
    )
}

export default Form;