import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import "./Menu.css";
const Menu = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <Navbar bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="menu-left">
            <span className="logo-name">Sayesta Goswami, PhD</span>
            <h6 className="logo-title">CLINICAL PSYCHOLOGIST</h6>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className=" menu-right">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink className="mx-5" to="/">
            ABOUT ME
          </NavLink>
          <NavLink to="/about-me">CONTACT US</NavLink>
          {/* <NavLink to="/contact-us">Home</NavLink> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
