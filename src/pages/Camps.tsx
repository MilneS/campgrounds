import classes from "./Camps.module.css";
import CampCard from "../comps/CampCard";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../store/state.model";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Camps = () => {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state: State) => state.isLoggedin);
  const allData = useSelector((state: State) => state.allCamps);

  useEffect(() => {
    getAllCamps();
  }, []);

  const addHandler = () => {
    dispatch({ type: "logginFromCampsBtn" });
  };

  const getAllCamps = async () => {
    const allCampsApi: any = process.env.REACT_APP_API_CAMPS;
    const response = await fetch(allCampsApi, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "setAllCamps", payload: data });
    } else {
      let errorMessage: string = "Getting all camps failed!";
      console.log(errorMessage);
    }
  };

  const allCampsData = () => {
    if (Object.keys(allData).length) {
      return Object.keys(allData).map((item, index) => {        
        return <CampCard key={index} item={allData[item]} dataKey={item} />;
      });
    }
  };

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
            <Button
              variant="success"
              size="lg"
              type="button"
              className="mb-3"
              onClick={addHandler}
            >
              Add Campground
            </Button>
          </NavLink>
        )}
      </div>
      {allCampsData()}
    </div>
  );
};
export default Camps;
