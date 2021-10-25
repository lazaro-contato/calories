import styled from "styled-components";
import { Colors } from "../../styles/consts";
import { MEDIA } from "../../styles/consts"

export const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;



${MEDIA.LARGE_SCREEN}{

    background-color: ${Colors.PRIMARY_BACKGROUND};
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    width: 1300px;
    height: 650px;
}
`

export const FlexContainer = styled.div`

${MEDIA.LARGE_SCREEN}{
    display: flex;
    justify-content: center;
    width: 100%;
}
`

export const FormContainer = styled.div`

display: flex;
justify-content: center;


${MEDIA.LARGE_SCREEN}{
    width: 45%;
}
`

export const ElementContainer = styled.div`



display: flex;
justify-content: center;

${MEDIA.LARGE_SCREEN}{
    width: 55%;
}
`