console.log("App.js is running!");

// JSX - Javascript XML
var template = (
  <div>
    <h1> Indecision App! </h1>
    <p>Udemy course</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
