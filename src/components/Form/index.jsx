import React, { useState } from "react";
import { DivDescription, FormContainer, InputData, InputSubmit, TextDescription, UnitSpan } from "./styles";
import { useForm } from "react-hook-form"


function Form({setValues}) {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [age, setAge] = useState(0)
    
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {

        const newHeight = data.altura
        const newWeight = Math.round(data.peso.replace(",", "."))
        const newAge = Math.round(data.idade.replace(",", "."))

        setHeight(newHeight)
        setWeight(newWeight)
        setAge(newAge)

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