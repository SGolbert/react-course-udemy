"use strict";

console.log("App.js is running!");

// JSX - Javascript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " Indecision App! "
  ),
  React.createElement(
    "p",
    null,
    "Udemy course"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
