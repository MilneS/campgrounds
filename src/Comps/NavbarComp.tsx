import classes from "./NavbarComp.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
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
          <NavLink to="/" className={classes.campgroundsLogo}>
            CampGrounds
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavLink
              to="/campgrounds"
              id="all"
              className={classes.campgroundsLink}
              activeClassName={classes.active}
            >
              All campgrounds
            </NavLink>
            <NavLink
              to="/login"
              id="login"
              className={classes.loginLink}
              activeClassName={classes.active}
            >
              Login
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
