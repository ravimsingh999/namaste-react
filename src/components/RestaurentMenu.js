import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurent from "../utils/useRestaurentMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurentMenu = () => {
  const params = useParams();
  const restaurentData = useRestaurent(params.id);
  const dispatch = useDispatch();

  const handleAddItemInCart = (e) => {
    dispatch(addItem(e));
  };

  return !restaurentData ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="m-2">
        <img src={IMG_CDN_URL + restaurentData?.data?.cloudinaryImageId} />
        <h1>{restaurentData?.data?.area}</h1>
        <h1>{restaurentData?.data?.city}</h1>
        <h1>{restaurentData?.data?.costForTwo}</h1>
        <h1>{restaurentData?.data?.totalRatings}</h1>
      </div>
      <div className="m-2">
        <h1 className="p-2 m-2 font-bold text-lg">Menu</h1>
        <ul>
          {Object.values(restaurentData?.data?.menu?.items).map((e) => {
            return (
              <div className="flex">
                <li className="p-2 m-2" key={e.id}>
                  {e.name}
                </li>
                <button
                  className="p-2 m-2 bg-blue-200"
                  onClick={() => handleAddItemInCart(e)}
                >
                  add
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
