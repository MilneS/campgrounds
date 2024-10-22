import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";
 
const Home = () => {
  return (
    <div className={classes.background}>
      <div className={classes.main}>
        <div className={classes.nav}>
          <ul className={classes.ul}>
            <div className={classes.logolink}>CampGrounds</div>
            <NavLink to="/campgrounds/camps" className={classes.link}>
              All campgrounds
            </NavLink>
            <NavLink to="/campgrounds/login" className={classes.loginLink}>
              Login
            </NavLink>
          </ul> 
        </div>
        <div className={classes.middleContainer}>
          <h1 className={classes.title}>CampGrounds</h1>
          <div className={classes.message}>
            <p>
              Welcome to CampGrounds! <br />
              Jump right in and explore our many campgrounds. <br /> Login or
              sign up to share some of your own and comment on others!
            </p>
          </div>
          <NavLink to="/campgrounds/camps">
            <button className={classes.homeButton}>View Campgrounds</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;
