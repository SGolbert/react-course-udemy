"use strict";

console.log("App.js is running!");

var appRoot = document.getElementById("app");

var show = false;

function onClickHandler() {
  show = !show;
  renderTemplate();
}

function renderTemplate() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onClickHandler },
      show ? "Hide" : "Show",
      " details"
    ),
    show ? React.createElement(
      "p",
      null,
      "The hidden truth"
    ) : ""
  );

  ReactDOM.render(template, appRoot);
}

renderTemplate();
