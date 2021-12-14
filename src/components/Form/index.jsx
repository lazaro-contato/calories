import React from "react";
import { DivDescription, FormContainer, InputData, InputSubmit, TextDescription, UnitSpan } from "./styles";
import { useForm } from "react-hook-form"


function Form({setValues}) {

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {


        setValues({
            altura: data.altura,
            peso: data.peso.replace(",", "."),
            idade: data.idade
        })

    };


    return(

        <FormContainer onSubmit={handleSubmit(onSubmit)}>

            <DivDescription>
                <TextDescription>Altura</TextDescription>
                <InputData name="altura" {...register('altura', { required: true, minLength: 1 })} type="number" step="0.1"/>
                <UnitSpan>cm</UnitSpan>

                <TextDescription>Peso</TextDescription>
                <InputData name="peso" {...register('peso', { required: true })} type="number" step="0.01"/>
                <UnitSpan>Kg</UnitSpan>

                <TextDescription>Idade</TextDescription>
                <InputData name="idade" {...register('idade', { required: true })} type="number" step="0.01"/>
                <InputSubmit type="submit" />

            </DivDescription>
        </FormContainer>
    )
}

export default Form;