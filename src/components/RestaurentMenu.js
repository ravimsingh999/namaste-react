import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const params = useParams();
  const [restaurentData, setRestaurentData] = useState(null);
  useEffect(() => {
    getResturentMenu();
  }, []);
  async function getResturentMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.4916812&lng=77.094897&menuId=" +
        params.id
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.data.name);
    setRestaurentData(json);
  }

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
