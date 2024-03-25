import React, {useState} from "react";
import "./SideBarComponenet.module.css";
import {Container} from "react-bootstrap";
import NavBarElementComponenet from "../../navbar/navbarElementComponenet/navBarElementComponenet";
import "bootstrap/dist/css/bootstrap.min.css";
import {NavBarLinks} from "../../navbar/NavBarLinks";
import {NavBarSubElements} from "../../navbar/NavBarSubElements";

function SideBarComponenet() {
    const [activeSubElement, setActiveSubElement] = useState(null);

    const handleNavBarClick = (navBarName,t) => {
        console.log(t);
        if (activeSubElement === navBarName) {
            setActiveSubElement(null); // If clicked again, close the sub-elements
        } else {
            setActiveSubElement(navBarName); // Otherwise, open the clicked sub-elements
        }
    };

    return (
        <>
            <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
                <a href="/" className="header-logo">
                    <img height="25px" src="https://templates.iqonic.design/posdash/html/assets/images/logo.png"
                         className="side-bar-logo" alt="logo"/><h5
                    className="logo-title light-logo ml-3">POSDash</h5>
                </a>
                <div className="iq-menu-bt-sidebar ml-0">
                    <i className="las la-bars wrapper-menu"></i>
                </div>
            </div>
            <Container className="sidebar-container">
                <ul className="nav nav-pills flex-column mb-auto side-bar-items">
                    {Object.entries(NavBarLinks.NavbarElements).map(([key, element]) => (
                        <React.Fragment key={key}>
                            <NavBarElementComponenet
                                to={element.to}
                                text={element.text}
                                icon={element.icon}
                                onClick={() => handleNavBarClick(key,element.subElements)}
                            />
                            {activeSubElement === element.text &&
                                <NavBarSubElements
                                    elements={element.subElements}
                                />
                            }
                        </React.Fragment>
                    ))}
                </ul>
                <hr></hr>
            </Container>
        </>
    );
}

export default SideBarComponenet;
