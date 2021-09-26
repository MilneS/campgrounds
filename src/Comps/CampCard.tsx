import classes from "./AllCampsCard.module.css";
import LoginPic from "../utils/LoginPic.jpeg";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const CampCard = ({item}: any) => {
  return (
    <div className={classes.container}>
      <div className={classes.containerImg}>
        <img src={LoginPic} alt="" className={classes.img} />
      </div>
      <div className={classes.containerInfo}>
      <div>
          <div className={classes.title}>{item.title}</div>
          <div className={classes.description}>{item.description}</div>
          <div className={classes.location}>{item.location}</div>
        </div>
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
export default CampCard;
