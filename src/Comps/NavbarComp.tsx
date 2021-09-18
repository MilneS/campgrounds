import classes from "./NavbarComp.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <Navbar.Brand href="#home" className={classes.campgroundsLogo}>
              CampGrounds
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/campgrounds">
                <Nav.Link href="#pricing" className={classes.campgroundsLink}>
                  All campgrounds
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className="me-auto">
              <Link to="/login">
                <Nav.Link href="#deets" className={classes.campgroundsLink}>
                  Login
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
