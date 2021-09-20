import classes from "./Camps.module.css";
import AllCampsCard from "../comps/AllCampsCard";

const Camps = () => {


// fetch camps

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>All CampGrounds</h1>
     {/* map on fetched camps here */}
      <AllCampsCard />
    </div>
  );
};
export default Camps;
