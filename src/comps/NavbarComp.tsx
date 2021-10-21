import classes from "./NavbarComp.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../store/interface.model";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NavbarComp = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isLoggedin: boolean = useSelector((state: State) => state.isLoggedin);

  // --------------------------------------------------------------------------- FUNCS -----------------------------------------
  // ----------------- LOGOUT -----------------
  const logoutHandler = () => {
    dispatch({ type: "loggedout" });
    dispatch({ type: "getToken", token: null });
    dispatch({ type: "loginComp" });
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setExpanded(false);
  };

  // ----------------- SHOW LOGIN COMP -----------------
  const loginHandler = () => {
    dispatch({ type: "loginComp" });
    setExpanded(false);
  };

  // ----------------- BTN -----------------
  const btnHandler = () => {
    dispatch({ type: "logoutFromCampsBtn" });
    setExpanded(false);
    dispatch({ type: "detailsComp" });

  };

  // ----------------- BURGER MENU -----------------
  const toggleHandler = () => {
    setExpanded(!expanded);
  };

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
              <NavLink
                onClick={btnHandler}
                to="/campgrounds/camps"
                id="all"
                className={classes.campgroundsLink}
                activeClassName={classes.active}
              >
                All campgrounds
              </NavLink>
              {!isLoggedin && (
                <NavLink
                  to="/campgrounds/login"
                  id="login"
                  className={classes.loginLink}
                  activeClassName={classes.active}
                  onClick={loginHandler}
                >
                  Login
                </NavLink>
              )}
              {isLoggedin && (
                <NavLink
                  to="/campgrounds/login"
                  id="login"
                  className={classes.loginLink}
                  activeClassName={classes.active}
                  onClick={logoutHandler}
                >
                  Logout
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
