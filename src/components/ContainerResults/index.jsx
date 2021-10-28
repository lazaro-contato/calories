import React from "react";
import { AlignDiv, MainContainerResults, ResultsDiv } from "./styles.js";
import InfoCalories from '../InfoCalories/index'
import TextResult from '../TextResult/index'
import TextDescription from "../TextDescription/index";


function ContainerResults(props) {
    console.log(props.values)

    const alturaValor = props.values.altura;
    const pesoValor = props.values.peso;
    const idadeValor = props.values.idade;

    const TMB = 66 + (13.7 * pesoValor) + (5 * alturaValor) - (6.8 * idadeValor)

    const NAT = TMB * 1.25;
    const AFM = TMB * 1.35;
    const AFI = TMB * 1.45;


    return(
        <MainContainerResults>  
            <ResultsDiv>
                <InfoCalories textContent="Taxa Metabólica Basal"/>
            </ResultsDiv>
            <ResultsDiv>
                <TextResult result={TMB.toFixed(2)} unit="Calorias/dia"/>
            </ResultsDiv>
            <ResultsDiv>
                <InfoCalories textContent="Necessidade diária de calorias"/>
            </ResultsDiv>
            <ResultsDiv>
                <AlignDiv>
                    <TextDescription text="Nenhuma atividade física"/>
                    <TextResult result={NAT.toFixed(2)} unit="Calorias/dia"/>
                </AlignDiv>
            </ResultsDiv>
            <ResultsDiv>
                <AlignDiv>
                    <TextDescription text="Atividade física moderada"/>
                    <TextResult result={AFM.toFixed(2)} unit="Calorias/dia"/>
                </AlignDiv>
            </ResultsDiv>
            <ResultsDiv>
                <AlignDiv>
                    <TextDescription text="Atividade física intensa"/>
                    <TextResult result={AFI.toFixed(2)} unit="Calorias/dia"/>
                </AlignDiv>
            </ResultsDiv>
        </MainContainerResults>
        
            


    )
}

export default ContainerResults;    