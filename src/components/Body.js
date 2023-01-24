import { restaurentList } from "../config";
import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, allRestaurents) {
  const filterData = allRestaurents.filter((restaurent) => {
    return restaurent?.data?.name
      .toLowerCase()
      ?.includes(searchInput.toLowerCase());
  });
  return filterData;
}

const Body = () => {
  //let searchInput = "KFC";
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filterRestaurents, setFilterRestaurents] = useState([]);

  useEffect(() => {
    getResturentData();
  }, []);

  async function getResturentData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4916812&lng=77.094897&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurents(json?.data?.cards[2]?.data?.data?.cards);
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
      {/* <h1>{searchInput}</h1> */}
      {filterRestaurents.length === 0 ? (
        <h1>Your search is not found</h1>
      ) : (
        <div className="resturents">
          {filterRestaurents.map((resturent) => {
            return (
              <RestaurentCard {...resturent.data} key={resturent.data.id} />
            );
          })}
          {/* <ResturentCard {...resturentList[0].data.data} />
        <ResturentCard {...resturentList[1].data.data} />
        <ResturentCard {...resturentList[2].data.data} />
        <ResturentCard {...resturentList[3].data.data} /> */}
        </div>
      )}
    </>
  );
};

export default Body;
