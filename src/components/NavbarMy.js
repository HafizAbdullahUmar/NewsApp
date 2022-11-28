import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const NavbarMy = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/business">
                  Business
                </Nav.Link>
                <Nav.Link as={Link} to="/entertainment">
                  Entertainment
                </Nav.Link>
                <Nav.Link as={Link} to="/health">
                  Health
                </Nav.Link>
                <Nav.Link as={Link} to="/science">
                  Science
                </Nav.Link>
                <Nav.Link as={Link} to="/sports">
                  Sports
                </Nav.Link>
                <Nav.Link as={Link} to="/technology">
                  Technology
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}
export default NavbarMy