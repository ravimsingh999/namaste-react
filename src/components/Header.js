import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img className="title" alt="logo" src={logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn === false ? (
        <button onClick={() => setIsLoggedIn(true)}>logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>login</button>
      )}
    </div>
  );
};

export default Header;
