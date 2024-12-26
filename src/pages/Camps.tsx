import classes from "./Camps.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CampCard from "../comps/CampCard";
import Button from "react-bootstrap/Button";
import { CampCollection, State } from "../store/interface.model";
import { database } from "../firebase/firebase";

const Camps = () => {
  const [path, setPath] = useState<string>("/campgrounds/login");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dispatch = useDispatch();
  const isLoggedin: boolean = useSelector((state: State) => state.isLoggedin);
  const allData: CampCollection = useSelector((state: State) => state.allCamps);

  // --------------------------------------------------------------------------- FUNCS -------------------

  // ----------------- FETCH CAMPS FROM DB -----------------
  const getAllCamps = async () => {
    var starCountRef = database.ref("camps/");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch({ type: "setAllCamps", payload: data });
      }
      setIsLoading(false);
    });

    // *** ADD ERR HANDLING ***
    //   let errorMessage: string = "Getting all camps failed!";
    //   console.log(errorMessage);
  };
  // ----------------- FIRE GETALLCAMP() -----------------
  useEffect(() => {
    getAllCamps();
  }, []);

  // ----------------- ISOLATE CAMP KEY / DATA -----------------
  const allCampsData = () => {
    if (Object.keys(allData).length) {
      return Object.keys(allData).map((item, index) => {
        return <CampCard key={index} item={allData[item]} dataKey={item} />;
      });
    }
  };

  // ----------------- NAVLINK PATH -----------------
  useEffect(() => {
    isLoggedin
      ? setPath("/campgrounds/newcamp")
      : setPath("/campgrounds/login");
  }, []);
 
  // ------------------------------------------------------------- JSX -------------------------------------------------------------
  return ( 
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.h1}>All CampGrounds</h1>
        <div>
          <NavLink to={path}>
            <Button
              variant="success"
              size="lg"
              type="button"
              className={classes.button}
            >
              Add Campground
            </Button>
          </NavLink>
        </div>
      </div>
      {isLoading ? (
        <div className={classes.loading}>Loading...</div>
      ) : Object.keys(allData).length === 0 ? (
        <div className={classes.loading}>No campgrounds available.</div>
      ) : (
        allCampsData()
      )}
    </div>
  );
};
export default Camps;
