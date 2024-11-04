import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
  // space for functions
return (
<Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">MyBrand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
);
}

export default NavBar;