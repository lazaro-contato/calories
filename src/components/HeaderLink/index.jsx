import React from "react";
import { HeaderLink } from "./styles";


function Link({link,name}) {
    return(
        <HeaderLink href={link} target="_blank" rel="noreferrer">{name}</HeaderLink>
    )
}

export default Link;