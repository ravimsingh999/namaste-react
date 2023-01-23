import { IMG_CDN_URL } from "../config";

const RestaurentCard = ({ cloudinaryImageId, name, cuisines, area }) => {
  // const { cloudinaryImageId, name, cuisines, area } = restaurant.data.data;
  return (
    <div className="resturent-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{area}</h4>
    </div>
  );
};

export default RestaurentCard;
