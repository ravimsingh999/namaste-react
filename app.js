/***
 *  These are the things that bundler (Parcel) do for us when we build our project ......
 * 
 * 
 *  Create the Server
 *  HMR - Hot Module Replacement :- Bundlers(Parcel) is using this functionality to automatically change the result when we do any changes in the code. Parcel keeps a track of all the files and when we will change any file and save it, the page will refresh and come up with the new update.
 *  File watcher Algorightms - in HMR, these algos are being used. its written in c++.
 *
 *  .parcel-cache :- This folder is used by Parcel to perform the functionalities, Parcel keeps its file here.
 *  dist:-  This folder is used when we build our files for development or production, then the created files will be here.
 *
 *  npx:- npx means execute using npm
 *  command - npx parcel index.html , here index.html is entry point.
 *  command - npx parcel build index.html, for production build we use this command parcel will be doing a lot of things behind the scene to make it fast like minifying the code, tree shaking, removing console log etc., After this only three files will be created as (Production Build) and those files will be kept in the dist folder.
 *
 *  BUNDLING
 *  MINIFY
 *  Cleaning our code
 *  Dev and Production build
 *  Super fast build algorithms
 *  Image optimization
 *  caching while development - parcel use caching to make our build faster.
    Consistent Hashing Algorithms - parcel uses these algos to cache things.
 *  compression - like varible names will be small like that.
 *  Compatible with older version of browser.
 *  HTTPS on dev, for using https in development env we have to tell parcel with command - npx parcel build index.html --https
 *  Port number :- it manages the port numbers as well.
 *  Zero config bundler. "Parcel is zero config bundler".
 *  Trasitive dependencies : Its basically a dependency tree , one dependency is depend on there and that other is depend on another like this.
 *  
 */

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
