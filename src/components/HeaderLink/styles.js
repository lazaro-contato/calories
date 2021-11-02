import styled from "styled-components";
import { Colors } from '../../styles/consts'

export const HeaderLink = styled.a`
text-decoration: none;

font-size: 24px;

display: block;
padding: 0.5rem;

color: #${Colors.PRIMARY_COLOR_FONT};


&&:visited {
    color: ${Colors.PRIMARY_COLOR_FONT};
    
}

&&:hover{
    color:${Colors.PRIMARY_BLUE};
    transition: 0.3s;
}

`