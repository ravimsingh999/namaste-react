import { useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <h1>Functional component</h1>
      <h2>Name: {props.name}</h2>
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Profile;
