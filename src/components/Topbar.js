import React from "react";
import { Navbar, Container, Nav, FormControl } from "react-bootstrap";
import logo from "../assets/logo.svg";

const Topbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Market</Nav.Link>
            <Nav.Link href="#link">Trade</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Download</Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
            <FormControl
              className="search-input"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </Nav>
          <a
            href="https://www.aktiva.co.id/contact-us/"
            className="btn sign-up me-3">
            Sign Up
          </a>
          <a href="https://app.aktiva.co.id/login" className="btn sign-in">
            Login
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
