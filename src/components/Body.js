import { restaurentList } from "../config";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

function filterData(searchInput, restaurents) {
  const filterData = restaurentList.filter((restaurent) => {
    return restaurent.data.name.includes(searchInput);
  });
  return filterData;
}

const Body = () => {
  //let searchInput = "KFC";
  const [searchInput, setSearchInput] = useState("");
  const [restaurents, setRestaurents] = useState(restaurentList);
  return (
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
            let data = filterData(searchInput, restaurents);
            setRestaurents(data);
          }}
        >
          Search
        </button>
      </div>
      {/* <h1>{searchInput}</h1> */}
      <div className="resturents">
        {restaurents.map((resturent) => {
          return <RestaurentCard {...resturent.data} key={resturent.data.id} />;
        })}
        {/* <ResturentCard {...resturentList[0].data.data} />
        <ResturentCard {...resturentList[1].data.data} />
        <ResturentCard {...resturentList[2].data.data} />
        <ResturentCard {...resturentList[3].data.data} /> */}
      </div>
    </>
  );
};

export default Body;
