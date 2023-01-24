import { useState } from "react";

const Title = () => {
  return (
    <a href="/">
      <img
        className="title"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0oy_Y-JZ5wQKWatiTCQ0C4hEtmKw1_gWRA&usqp=CAU"
      />
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
