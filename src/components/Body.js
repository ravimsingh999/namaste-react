import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filterRestaurents, setFilterRestaurents] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getResturentData();
  }, []);

  async function getResturentData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4916812&lng=77.094897&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurents(json?.data?.cards[2]?.data?.data?.cards);
  }

  const online = useOnline();
  if (!online) {
    return <h1>Oops, You are Offline</h1>;
  }

  return allRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-2 m-2">
        <input
          type="text"
          className="focus: p-1 m-1"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="px-2 bg- bg-green-400"
          onClick={() => {
            let data = filterData(searchInput, allRestaurents);
            setFilterRestaurents(data);
          }}
        >
          Search
        </button>
      </div>
      {filterRestaurents.length === 0 ? (
        <h1>Your search is not found</h1>
      ) : (
        <div className="flex flex-wrap">
          {filterRestaurents.map((resturent) => {
            return (
              <Link
                to={"restaurent/" + resturent.data.id}
                key={resturent.data.id}
              >
                <RestaurentCard {...resturent.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
