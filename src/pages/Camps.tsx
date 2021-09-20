import classes from "./Camps.module.css";
import AllCampsCard from "../comps/AllCampsCard";

const Camps = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>All CampGrounds</h1>
      <AllCampsCard />
    </div>
  );
};
export default Camps;
