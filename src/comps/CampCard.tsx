import classes from "./CampsCard.module.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "../firebase/firebase";
import { propsCampCard } from "../store/interface.model";

const CampCard = (props: propsCampCard) => {
  const [itemImage, setItemImage] = useState<string>();

  // ----------------------------------- ITEM DATA -------------------
  const item = props.item;
  const dataKey = props.dataKey;

  // ----------------------------------- GET IMAGE URL -------------------
  useEffect(() => {
    storage
      .ref(`images/${dataKey}`)
      .getDownloadURL()
      .then((url) => {
        setItemImage(url);
      })
      .catch((error: Error) =>
        console.log(
          `Getting image failed on campCard ${JSON.stringify(error.message)}`
        )
      );
  }, [props.item]);

  // ------------------------------------------------------------- JSX -------------------------------------------------------------
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
        <div>
          <NavLink to={`/campgrounds/details/${dataKey}`}>
            <Button
              variant="primary"
              size="lg"
              type="button"
              className={classes.button}
            >
              View
            </Button>
          </NavLink> 
        </div>
      </div>
    </div>
  );
};
export default CampCard;
