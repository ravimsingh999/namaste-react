import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurent from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const params = useParams();
  const restaurentData = useRestaurent(params.id);

  return !restaurentData ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <img src={IMG_CDN_URL + restaurentData?.data?.cloudinaryImageId} />
        <h1>{restaurentData?.data?.area}</h1>
        <h1>{restaurentData?.data?.city}</h1>
        <h1>{restaurentData?.data?.costForTwo}</h1>
        <h1>{restaurentData?.data?.totalRatings}</h1>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurentData?.data?.menu?.items).map((e) => {
            return <li key={e.id}>{e.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
