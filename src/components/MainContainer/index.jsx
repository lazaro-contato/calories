import React from "react";
import Form from "../Form";
import InfoCalories from "../InfoCalories";
import { Container, ElementContainer, FlexContainer } from "./styles";

 

function MainContainer() {
    return(
            <Container>
                <FlexContainer>
                    <ElementContainer>
                        <Form />
                    </ElementContainer>
                    <ElementContainer>
                        <InfoCalories textContent="Taxa Metabólica Basal" unit="Calorias por dia"/>
                        <InfoCalories textContent="Necessidade diária de calorias" unit="Calorias por dia"/>
                    </ElementContainer>
                </FlexContainer>
            </Container>
    )
}

export default MainContainer;