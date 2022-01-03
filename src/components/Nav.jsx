import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";

const NavBar = () => (
  <Navbar bg="primary" variant="dark">
    <Container>
      <Link to="/">
        <Navbar.Brand href="/">Alkemy</Navbar.Brand>
      </Link>
      <Nav className="me-auto">
        <Link to="/">
          <Nav.Link href="/">Home</Nav.Link>
        </Link>
        <Link to="/login">
          <Nav.Link href="/login">Login</Nav.Link>
        </Link>
        <Link to="/search">
          <Nav.Link href="/search">Search</Nav.Link>
        </Link>
      </Nav>
    </Container>
  </Navbar>
);
export default NavBar;
