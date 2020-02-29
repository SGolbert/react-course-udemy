"use strict";

console.log("App.js is running!");

var appData = {
    title: "Indecision? Away!",
    subtitle: "resolving all your doubts",
    options: ["one", "two"]
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted!");
    var option = e.target.elements.option.value;

    if (option) {
        appData.options.push(option);
        e.target.elements.option.value = "";
        renderTemplate();
    }
}

function resetList() {
    appData.options = [];
    renderTemplate();
}

var appRoot = document.getElementById("app");

function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            appData.title
        ),
        appData.subtitle ? React.createElement(
            "p",
            null,
            appData.subtitle
        ) : "",
        React.createElement(
            "p",
            null,
            appData.options.length > 0 ? "Here are your options:" : "No options :("
        ),
        React.createElement(
            "button",
            { onClick: resetList },
            "Reset list"
        ),
        React.createElement(
            "ol",
            null,
            appData.options.map(function (opt) {
                return React.createElement(
                    "li",
                    null,
                    opt
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
}

renderTemplate();
