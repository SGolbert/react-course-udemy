console.log("App.js is running!");

// JSX - Javascript XML
var template = React.createElement("h1", { id: "someid" }, "Something new");
// = <p>This is JSX from app.js!</p>;

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
