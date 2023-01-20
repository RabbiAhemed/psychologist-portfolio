import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <Navbar bg="" expand="lg" className="menu">
      <Container fluid>
        <Navbar.Brand to="/">
          <div className="menu-left">
            <span className="logo-name">Sayesta Goswami, PhD</span>
            <h6 className="logo-title">CLINICAL PSYCHOLOGIST</h6>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="menu-right">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Link
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
          >
            HOME
          </Link>
          <Link to="/about" className="ms-4">
            ABOUT
          </Link>
          <Link to="/contact" className="ms-4">
            CONTACT US
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
