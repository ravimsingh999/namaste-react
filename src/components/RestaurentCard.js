import { IMG_CDN_URL } from "../config";

const RestaurentCard = ({ cloudinaryImageId, name, cuisines, area }) => {
  // const { cloudinaryImageId, name, cuisines, area } = restaurant.data.data;
  return (
    <div className="w-56 h-auto p-2 m-2 shadow-lg bg-pink-50">
      <img className="h-50 w-50" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{area}</h4>
    </div>
  );
};

export default RestaurentCard;
