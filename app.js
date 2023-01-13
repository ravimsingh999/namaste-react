import React from "react";
import ReactDOM from "react-dom/client";

const heading = document.getElementById("heading");
heading.innerHTML = "Hello from DOM";

const heading1 = React.createElement(
  "h1",
  {},
  "This is new heading 1 created by React"
);
const heading2 = React.createElement(
  "h1",
  {},
  "This is new heading 2 created by React"
);
const newDiv = React.createElement("div", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(newDiv);
