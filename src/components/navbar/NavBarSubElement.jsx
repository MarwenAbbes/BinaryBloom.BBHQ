import {Link} from "react-router-dom";
import React from "react";

export function NavBarSubElement({to,Icon,text}) {
    return (
        <li>
            <Link
                to={to}
                className={`nav-link`}>
                {Icon && <Icon className="sidebar-icon"/>}
                {text}
            </Link>
        </li>
    )
}

