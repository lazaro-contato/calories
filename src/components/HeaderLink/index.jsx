import React from "react";
import { HeaderLink } from "./styles";


function Link({link,name}) {
    return(
        <HeaderLink href={link}>{name}</HeaderLink>
    )
}

export default Link;