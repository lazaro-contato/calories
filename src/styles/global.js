import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
}

body {

    font-size: 14px;

}

`

export const DataContainer = styled.div`

margin-top: 50px;

display: flex;
align-items: center;
justify-content: center;


`

export const DivPageFlex = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;

height: 100vh;
`