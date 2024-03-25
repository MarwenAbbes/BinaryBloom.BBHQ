import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaBell, FaUser, FaCog } from "react-icons/fa"; // Import icons
import Avatar from "react-avatar"; // Import Avatar component
import Badge from "react-bootstrap/Badge"; // Import Badge component
import "bootstrap/dist/css/bootstrap.min.css";
import "./navBarComponent.css"; // Import custom CSS file for styling

function NavBarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="#homepage">Binary Bloom</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="ml-auto">
              <div className="notification-block">
                <FaBell className="mx-3" />
                <Badge className="notification-badge" bg="danger">
                  3
                </Badge>{" "}
                {/* Badge for notifications */}
              </div>
              <Avatar
                className="mx-3 avatar-icon"
                name="John Doe"
                size="40"
                round={true}
              />{" "}
              {/* Avatar component with initials */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComp;
