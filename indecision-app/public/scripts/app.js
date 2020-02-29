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
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item 1"
    ),
    React.createElement(
      "li",
      null,
      "Item 2"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Sebastian Golbert"
  ),
  React.createElement(
    "p",
    null,
    "Age: 35"
  ),
  React.createElement(
    "p",
    null,
    "Location: M\xFCnster, Germany"
  )
);

var appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
