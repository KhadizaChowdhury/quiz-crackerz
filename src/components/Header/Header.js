import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/shop">Topics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/shop">Topics</Nav.Link>
            <Nav.Link href="/order">Statistics</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/shop">Topics</Nav.Link>
            <Nav.Link href="/order">Statistics</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const Header = () => {
    return (
        CollapsibleExample()
    );
};

export default Header;