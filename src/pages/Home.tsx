import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.background}>
      <div className={classes.main}>
        <div className={classes.nav}>
          {/* <ul className={classes.ul}>
            <div className={classes.logolink}>
              CampGrounds
            </div>
            <NavLink to="/campgrounds/camps" className={classes.link}>
              All campgrounds
            </NavLink>
            <NavLink to="/campgrounds/login" className={classes.link}>
              Login
            </NavLink>
          </ul> */}
        </div>
        <div className={classes.middleContainer}>
          <h1 className={classes.title}><u>/!\</u> <b>UNDER CONSTRUCTION</b> <u>/!\</u></h1>
          <div className={classes.message}>
            <p>
            
            </p>
          </div>
          {/* <NavLink to="/campgrounds/camps"> */}
{/* <button className={classes.homeButton}>View Campgrounds</button></NavLink> */}

          <div className={classes.homeFooter}>© 2021</div>
        </div>
      </div>
    </div>
  );
};
export default Home;