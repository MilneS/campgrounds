import classes from "./NavbarComp.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../store/state.model";
import { useDispatch } from "react-redux";

const NavbarComp = (props: any) => {
  const dispatch = useDispatch();

  const isLoggedin = useSelector((state: State) => state.isLoggedin);
  const logoutHandler = () => {
    dispatch({ type: "loggedout" });
  };
  const loginHandler = () => {
    dispatch({ type: "loginComp" });
  };

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
            {!isLoggedin && (
              <NavLink
                to="/login"
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
                to="/login"
                id="login"
                className={classes.loginLink}
                activeClassName={classes.active}
                onClick={logoutHandler}
              >
                Logout
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComp;
