"use strict";

console.log("App.js is running!");

var templateTitle = {
  title: "Indecision? Away!",
  subtitle: "resolving all your doubts"
};

// JSX - Javascript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    templateTitle.title
  ),
  React.createElement(
    "p",
    null,
    templateTitle.subtitle
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

var userName = "Erwin";
var userAge = 97;
var userLocation = "Switzerland";

var userObj = {
  name: userName,
  age: userAge,
  location: userLocation
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userName
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    userAge
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    userLocation
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
