import classes from "./NavbarComp.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const NavbarComp = (props: any) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className={classes.navbar}
      >
        <Container>
          <NavLink to="/">
            <Navbar.Brand  className={classes.campgroundsLogo}>
              CampGrounds
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/campgrounds">
                <Nav className={classes.campgroundsLink}>
                  All campgrounds
                </Nav>
              </NavLink>
            </Nav>
            <Nav className="me-auto">
              <NavLink to="/login">
                <Nav  className={classes.loginLink}>
                  Login
                </Nav>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
