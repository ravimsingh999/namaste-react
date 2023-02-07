import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useRestaurent from "../utils/useRestaurent";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  const filterRestaurents = useRestaurent();
  const allRestaurents = useRestaurent();

  const online = useOnline();
  if (!online) {
    return <h1>Oops, You are Offline</h1>;
  }

  return allRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
        <div className="resturents">
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
