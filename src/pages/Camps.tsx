import classes from "./Camps.module.css";
import AllCampsCard from "../comps/AllCampsCard";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../store/state.model";

const Camps = () => {
  const isLoggedin = useSelector((state: State) => state.isLoggedin);

  // fetch camps

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>All CampGrounds</h1>
      <div className={classes.button}>
        {isLoggedin && (
          <NavLink to="/newcamp">
            <Button variant="success" size="lg" type="button" className="mb-3">
              Add Campground
            </Button>
          </NavLink>
        )}
        {!isLoggedin && (
          <NavLink to="/login">
            <Button variant="success" size="lg" type="button" className="mb-3">
              Add Campground
            </Button>
          </NavLink>
        )}
      </div>
      {/* map on fetched camps here */}
      <AllCampsCard />
    </div>
  );
};
export default Camps;
