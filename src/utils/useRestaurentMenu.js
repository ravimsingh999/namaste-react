import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API_URL } from "../config";

const useRestaurentMenu = (resId) => {
  const [restaurent, setRestaurent] = useState(null);
  useEffect(() => {
    getResturentMenu();
  }, []);
  async function getResturentMenu() {
    const data = await fetch(RESTAURANT_MENU_API_URL + resId);
    const json = await data.json();
    setRestaurent(json);
  }
  return restaurent;
};

export default useRestaurentMenu;
