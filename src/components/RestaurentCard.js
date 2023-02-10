import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurentCard = ({ cloudinaryImageId, name, cuisines, area }) => {
  // const { cloudinaryImageId, name, cuisines, area } = restaurant.data.data;
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 h-auto p-2 m-2 shadow-lg bg-pink-50">
      <img className="h-50 w-50" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{area}</h4>
      <h5 className="heading font-bold text-md">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestaurentCard;
