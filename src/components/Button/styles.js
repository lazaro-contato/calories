import styled from 'styled-components';
import Colors from '../../styles/consts'

export const ButtonCont = styled.button`
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