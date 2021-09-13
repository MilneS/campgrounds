import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.background}>
      <div className={classes.main}>
        <div className={classes.nav}>
          <ul className={classes.ul}>
            <NavLink to="/" className={classes.logolink}>
              CampGrounds
            </NavLink>
            <NavLink to="/" className={classes.link}>
              All campgrounds
            </NavLink>
            <NavLink to="/login" className={classes.link}>
              Login
            </NavLink>
          </ul>
        </div>
        <div className={classes.middleContainer}>
          <h1 className={classes.title}>CampGrounds</h1>
          <div className={classes.message}>
            <p>
              Welcome to CampGrounds! <br />
              Jump right in and explore our many campgrounds. <br /> Feel free
              to share some of your own and comment on others!
            </p>
          </div>
          <button className={classes.homeButton}>View Campgrounds</button>
          <div className={classes.homeFooter}>© 2021</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
