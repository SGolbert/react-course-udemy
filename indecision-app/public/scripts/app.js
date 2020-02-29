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

var count = 0;

function addOne() {
    count++;
    renderCounterApp();
}

function substOne() {
    count--;
    renderCounterApp();
}

function resetCount() {
    count = 0;
    renderCounterApp();
}

var appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);

function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: substOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: resetCount },
            "Reset"
        )
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
