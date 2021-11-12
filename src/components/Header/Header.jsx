import React from "react";
import logo from "../../images/tmdb.png";
import "./Header.css"
import { Container, Row, Col, Nav, Navbar, Image } from "react-bootstrap";

function Header() {
  return (    
      <Row className="header">
        <Col md={{span: 2, offset: 1}}>
          <Image src={logo} alt="logo" width="80" height="80"/>
        </Col>
        <Col md={{ span: 5, offset: 4 }} >
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home">Deniz's Movie Database</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
  );
}

export default Header;
