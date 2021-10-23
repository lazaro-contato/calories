import React from "react";
import { AlignDiv, MainContainerResults, ResultsDiv } from "./styles.js";
import InfoCalories from '../InfoCalories/index'
import TextResult from '../TextResult/index'
import TextDescription from "../TextDescription/index";


function ContainerResults() {
    return(
        <MainContainerResults>  
            <ResultsDiv>
                <InfoCalories textContent="Taxa Metabólica Basal"/>
            </ResultsDiv>
            <ResultsDiv>
                <TextResult result="1754.4" unit="Calorias/dia"/>
            </ResultsDiv>
            <ResultsDiv>
                <InfoCalories textContent="Necessidade diária de calorias"/>
            </ResultsDiv>
            <ResultsDiv>
                <AlignDiv>
                    <TextDescription text="Nenhuma atividade física"/>
                    <TextResult result="1754.4" unit="Calorias/dia"/>
                </AlignDiv>
            </ResultsDiv>
            <ResultsDiv>
                <AlignDiv>
                    <TextDescription text="Atividade física moderada"/>
                    <TextResult result="1754.4" unit="Calorias/dia"/>
                </AlignDiv>
            </ResultsDiv>
            <ResultsDiv>
                <AlignDiv>
                    <TextDescription text="Atividade física intensa"/>
                    <TextResult result="1754.4" unit="Calorias/dia"/>
                </AlignDiv>
            </ResultsDiv>
        </MainContainerResults>
        
            


    )
}

export default ContainerResults;    