import { useState, useEffect } from "react";
import { RESTAURANT_API_URL } from "../config";

const useRestaurent = () => {
  const [restaurents, setRestaurents] = useState([]);

  useEffect(() => {
    getResturentData();
  }, []);

  async function getResturentData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4916812&lng=77.094897&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setRestaurents(json?.data?.cards[2]?.data?.data?.cards);
  }
  return restaurents;
};

export default useRestaurent;
