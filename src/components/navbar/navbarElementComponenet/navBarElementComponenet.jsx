import React from "react";
import "./navBarElementComponenet.css";
import { Link } from "react-router-dom";
export default function NavBarElementComponenet({ to, text, icon: Icon, onClick  }) {
  return (
    <li className={`nav-item`} onClick={onClick}>
      <Link
        to={to}
        className={`nav-link `}
      >
        {Icon && <Icon className="sidebar-icon" />}
        {text}
      </Link>
    </li>
  );
}
