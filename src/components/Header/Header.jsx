import React from "react";
import logo from "../../images/tmdb.png";
import "./Header.css";
import { Container, Row, Col, Nav, Navbar, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 
function Header() {
  return (
    <Row className="header">
      <Col xs={{ span: 2}} >
        <Image src={logo} alt="logo" width="80" height="80" className="logo"/>
      </Col>
      <Col sm={{ span: 5, offset: 5 }}>
        <Navbar expand="lg" className="my-2" >
          <Container className="links">
            <Navbar.Brand >Deniz's Movie Database</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto ">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#032541" : "",
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#032541" : "",
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  About
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
}

export default Header;
