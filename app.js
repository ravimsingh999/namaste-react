import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { style: { color: "red" } },
  "This is Heading 1"
);
const heading2 = React.createElement("h2", {}, "This is Heading 2");
const heading3 = React.createElement("h3", {}, "This is Heading 3");
const newDiv = React.createElement(
  "div",
  {
    className: "title",
  },
  [heading1, heading2, heading3]
);

// the same structure with JSX

const newDiv2 = (
  <div className="title">
    <h1>This is heading1</h1>
    <h2>This is Heading 2</h2>
    <h3>This is heading3</h3>
  </div>
);

// the same structure using JSX with functional component

const FunComponent = () => {
  return (
    <div className="title">
      <h1>This is heading1</h1>
      <h2>This is Heading 2</h2>
      <h3>This is heading3</h3>
    </div>
  );
};

// second functional component , in this we will use another functional component

const SecondFunctionalComponent = () => {
  return (
    <div>
      <h1>Below content is coming from first functional Component</h1>
      <FunComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SecondFunctionalComponent />);
