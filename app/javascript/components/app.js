import React from "react";
import ReactDOM from "react-dom";
import App from './App';

document.addEventListener("DOMContentLoaded", () => {
  console.log("here")
  ReactDOM.render(
    App,
    document.getElementById("app")
  );
});
