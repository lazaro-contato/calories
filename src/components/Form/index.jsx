import React, { useState } from "react";
import { DivDescription, FormContainer, InputData, InputSubmit, TextDescription, UnitSpan } from "./styles";
import { useForm } from "react-hook-form"


function Form({setValues}) {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [age, setAge] = useState("")
    
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {

        setHeight(data.altura)
        setWeight(data.peso)
        setAge(data.idade)

        setValues({
            altura: data.altura,
            peso: data.peso,
            idade: data.idade
        })

        console.log(height)
        console.log(weight)
        console.log(age)
    };

    return(

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <h1>casa</h1>

            <DivDescription>
                <TextDescription>Altura</TextDescription>
                <InputData name="altura" {...register('altura', { required: true, minLength: 1 })} />
                <UnitSpan>cm</UnitSpan>

                <TextDescription>Peso</TextDescription>
                <InputData name="peso" {...register('peso', { required: true })} />
                <UnitSpan>Kg</UnitSpan>

                <TextDescription>Idade</TextDescription>
                <InputData name="idade" {...register('idade', { required: true })} />
                <InputSubmit type="submit" />

            </DivDescription>
        </FormContainer>
    )
}

export default Form;