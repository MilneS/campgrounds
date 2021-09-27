import classes from "./AllCampsCard.module.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { app } from "../firebase/firebase";

const CampCard = (props: any) => {
  const item = props.item;
  const dataKey = props.dataKey;

  const [itemImage, setItemImage] = useState();

  let storageRef: any;
  let fileRef: any;
  storageRef = app.storage().ref();
  fileRef = storageRef.child(`images/${dataKey}`);
  fileRef.getDownloadURL().then(function (url: any) {
    setItemImage(url);
  });

  return (
    <div className={classes.container}>
      <div className={classes.containerImg}>
        <img src={itemImage} alt="" className={classes.img} />
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
