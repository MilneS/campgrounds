import classes from "./CampsCard.module.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { app } from "../firebase/firebase";


interface propsTypes {
  dataKey: string,
  item: {
    author: string,
    description: string,
    location: string,
    price: string,
    title: string,
  };
}
const CampCard = (props: propsTypes) => {
  const [itemImage, setItemImage] = useState<string>();
  const item = props.item;
  const dataKey = props.dataKey;

  useEffect(() => {
    let storageRef:firebase.storage.Reference = app.storage().ref();
    let fileRef: firebase.storage.Reference= storageRef.child(`images/${dataKey}`);
    fileRef
      .getDownloadURL()
      .then(function (url:string) {
        setItemImage(url);
      })
      .catch((error:Error) =>
        console.log(`Getting image failed on campCard ${JSON.stringify(error.message)}`)
      );
  }, [props.item]);

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
          <NavLink to={`/campgrounds/details/${dataKey}`}>
            <Button variant="primary" size="lg" type="button" className="mb-3">
              View
            </Button>
          </NavLink>
        </div>
        <div className={classes.buttonSmall}>
          <NavLink to={`/campgrounds/details/${dataKey}`}>
            <Button variant="primary" size="sm" type="button" className="mb-3">
              View
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default CampCard;
