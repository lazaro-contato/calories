import React from "react";
import InterrogationLogo from "../../assets/interrogation.svg"
import { Interrogation, TextConfig } from "./styles";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';


function InterrogationIcon(props) {
    return (
        <Tippy content={<TextConfig>{props.text}</TextConfig>}interactive={true} animation='scale' >
            <Interrogation src={InterrogationLogo}></Interrogation>
        </Tippy>
    )
}


export default InterrogationIcon;