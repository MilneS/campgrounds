import classes from "./AllCampsCard.module.css";
import LoginPic from "../utils/LoginPic.jpeg";
import Button from "react-bootstrap/Button";

const AllCampsCard = () => {
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
          <Button variant="primary" size="lg" type="button" className="mb-3">
            View
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AllCampsCard;
