import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Button.scss";

const Button = ({ link, linkClass, iconClass, text }) => {
  return (
    <LinkContainer to={link} className={linkClass}>
      <Nav.Link>
        <i className={iconClass}></i> {text}
      </Nav.Link>
    </LinkContainer>
  );
};

export default Button;
