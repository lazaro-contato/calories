import React from "react";
import ContainerResults from "../ContainerResults";
import Form from "../Form";
import { Container, ElementContainer, FlexContainer, FormContainer } from "./styles";

 

function MainContainer() {
    return(
            <Container>
                <FlexContainer>
                    <FormContainer>
                        <Form />
                    </FormContainer>
                    <ElementContainer>
                        <ContainerResults />
                    </ElementContainer>
                </FlexContainer>
            </Container>
    )
}

export default MainContainer;