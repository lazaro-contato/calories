import styled from "styled-components";
import { Colors } from "../../styles/consts"

export const FormContainer = styled.form`

width: 351px;
margin-bottom: 30px;

`

export const DivDescription = styled.div`

`

export const TextDescription = styled.p`

font-size: 24px;
font-weight: 700;

margin-bottom: 10px;
`

export const InputData = styled.input`

padding-left: 10px;
padding-right: 30px;

background-color: #FFFF;
width: 309px;
height: 42px;
margin-bottom: 40px;

border-radius: 10px;
border: 1px solid #E5E5E5;

box-shadow: 1px 1px 4px 0 #E5E9F6;

font-size: 20px;


&&:focus {
    outline: none;
}

`

export const UnitSpan = styled.span`

font-size: 20px;
color: ${Colors.PRIMARY_BLUE};

margin-left: 10px;
`

export const InputSubmit = styled.input`

width: 184px;
height: 50px;
border-radius: 55px;
border: none;

background-color: ${Colors.PRIMARY_BLUE};

font-size: 24px;
color: ${Colors.PRIMARY_BACKGROUND};

cursor: pointer;

&:hover {
    background-color: ${Colors.SECUNDARY_BLUE};
    color: white;
    transition: 0.3s;
  }

`

