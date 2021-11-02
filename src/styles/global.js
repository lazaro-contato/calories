import styled, { createGlobalStyle } from "styled-components";
import { MEDIA } from "../styles/consts"

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
}

body {

    font-size: 14px;

    /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

}

`
export const HeaderMainDiv = styled.div`
display: flex;
justify-content: center;
`

export const DataContainer = styled.div`

margin-top: 20px;

display: flex;
align-items: center;
justify-content: center;

${MEDIA.LARGE_SCREEN}{

    margin-top: 30px;

}


`

export const DivPageFlex = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;

height: 100vh;
`

export const FooterDiv = styled.div`

height: 70px;
`