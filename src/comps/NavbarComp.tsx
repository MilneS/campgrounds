import classes from "./NavbarComp.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../store/state.model";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NavbarComp = (props: any) => {
  const dispatch = useDispatch();

  const isLoggedin = useSelector((state: State) => state.isLoggedin);
  const logoutHandler = () => {
    dispatch({ type: "loggedout" });
    dispatch({ type: "getToken", token: null });
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
  };
  const loginHandler = () => {
    dispatch({ type: "loginComp" });
  };
  const btnHandler = () => {
    dispatch({ type: "logoutFromCampsBtn" });
    setExpanded(false);
  };
  const toggleHandler = () => {
    setExpanded(expanded ? false : "expanded");
  };

  const [expanded, setExpanded] = useState<boolean | any>(false);

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        expanded={expanded}
        bg="dark"
        variant="dark"
        className={classes.navbar}
      >
        <Container>
          <NavLink
            to="/campgrounds"
            className={classes.campgroundsLogo}
            onClick={btnHandler}
          >
            CampGrounds
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleHandler}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">
                <NavLink
                  onClick={btnHandler}
                  to="/campgrounds/camps"
                  id="all"
                  className={classes.campgroundsLink}
                  activeClassName={classes.active}
                >
                  All campgrounds
                </NavLink>
              </Nav.Link>
              {!isLoggedin && (
                <Nav.Link>
                  <NavLink
                    to="/campgrounds/login"
                    id="login"
                    className={classes.loginLink}
                    activeClassName={classes.active}
                    onClick={loginHandler}
                  >
                    Login
                  </NavLink>
                </Nav.Link>
              )}
              {isLoggedin && (
                <Nav.Link>
                  <NavLink
                    to="/campgrounds/login"
                    id="login"
                    className={classes.loginLink}
                    activeClassName={classes.active}
                    onClick={logoutHandler}
                  >
                    Logout
                  </NavLink>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
