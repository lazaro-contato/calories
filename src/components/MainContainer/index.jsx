import React from "react";
import ContainerResults from "../ContainerResults";
import Form from "../Form";
import { Container, ElementContainer, FlexContainer } from "./styles";

 

function MainContainer() {
    return(
            <Container>
                <FlexContainer>
                    <ElementContainer>
                        <Form />
                    </ElementContainer>
                    <ElementContainer>
                        <ContainerResults />
                    </ElementContainer>
                </FlexContainer>
            </Container>
    )
}

export default MainContainer;