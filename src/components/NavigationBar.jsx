// src/components/NavigationBar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../custom.css';
export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        {/* Brand/logo stays on the left */}
        <LinkContainer to="/">
          <Navbar.Brand>
            <i className="bi bi-heart-pulse-fill me-2" style={{ fontSize: '1.05rem' }}></i>
            PHQ-9
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* 👉 CHANGED: use mx-auto instead of me-auto */}
          <Nav className="mx-auto">
            <LinkContainer to="/patient">
              <Nav.Link>Patient Data</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/questionnaire">
              <Nav.Link>Questionnaire</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/report">
              <Nav.Link>Report</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
