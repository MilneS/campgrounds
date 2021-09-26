import classes from "./AllCampsCard.module.css";
import LoginPic from "../utils/LoginPic.jpeg";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AllCampsCard = () => {
  const [allData, setAllData] = useState<any>();
  const dispatch = useDispatch();

  const getAllCamps = async () => {
    const allCampsApi: any = process.env.REACT_APP_API_CAMPS;
    const response = await fetch(allCampsApi, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "setAllCamps", payload: data });
      setAllData(data);
      // console.log(data);
    } else {
      let errorMessage: string = "Getting all camps failed!";
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    getAllCamps();
  }, []);

  const allCampsData = () => {
    for (let key in allData) {
      // console.log(allCamps[camp].title);
      console.log(key, allData[key]);
    }
  };

  useEffect(() => {
    allCampsData();
  }, [allData]);

  // onClick button: redirect to details page and use Params

  return (
    <div className={classes.container}>
      <div className={classes.containerImg}>
        <img src={LoginPic} alt="" className={classes.img} />
      </div>
      <div className={classes.containerInfo}>
        <div className={classes.title}>title</div>
        <div className={classes.description}>descr</div>
        <div className={classes.location}>location</div>
        <div className={classes.button}>
          <NavLink to="/details/c">
            <Button variant="primary" size="lg" type="button" className="mb-3">
              View
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default AllCampsCard;
