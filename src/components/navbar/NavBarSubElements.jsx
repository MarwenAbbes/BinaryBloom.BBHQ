import React from "react";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import {NavBarSubElement} from "./NavBarSubElement";
import "./NavBar.css";

export function NavBarSubElements({elements}) {
    return (
        <ul className="navbar-sub-container">
            {Object.entries(elements).map(([key,element])=>(
                <NavBarSubElement to={element.to}
                                  icon={RemoveOutlinedIcon}
                                  text={element.text}/>
            ))}
        </ul>
    )
}