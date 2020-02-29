"use strict";

console.log("App.js is running!");

var templateTitle = {
  title: "Indecision? Away!",
  subtitle: "resolving all your doubts",
  options: []
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
  templateTitle.subtitle ? React.createElement(
    "p",
    null,
    templateTitle.subtitle
  ) : "",
  React.createElement(
    "p",
    null,
    templateTitle.options.length > 0 ? "Here are your options:" : "No options :("
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

var userObj = {
  name: "Erwin",
  age: 97,
  location: "Switzerland"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userObj.name || "Anonymous"
  ),
  userObj.age >= 18 ? React.createElement(
    "p",
    null,
    "Age: ",
    userObj.age
  ) : "",
  getLocation(userObj.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
