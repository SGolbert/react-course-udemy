"use strict";

console.log("App.js is running!");

// JSX - Javascript XML
var template = React.createElement(
  "p",
  null,
  " This is JSX from source "
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
