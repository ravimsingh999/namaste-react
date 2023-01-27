import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunction from "./Profile";

const About = () => {
  return (
    <div>
      <h1>Food Villa Restaurent</h1>
      <h2>
        Food Villa Restaurent is a React Project created in guidence of Akshay
        Saini....
      </h2>
      <div>
        <ProfileFunction name={"Shanu"} />
        <ProfileClass name={"Shanu"} />
      </div>
    </div>
  );
};

export default About;
