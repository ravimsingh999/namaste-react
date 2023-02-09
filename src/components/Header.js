import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img className="h-20 w-25 p-2" alt="logo" src={logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between bg-pink-50 shadow-md text-lg font-bold">
      <Title />
      <div>
        <ul className="flex p-4 m-2">
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>
          <li className="px-2">
            <Link to="/about">About </Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact </Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart </Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart </Link>
          </li>
        </ul>
      </div>
      {isLoggedIn === false ? (
        <button className="p-4 m-2" onClick={() => setIsLoggedIn(true)}>
          logout
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>login</button>
      )}
    </div>
  );
};

export default Header;
