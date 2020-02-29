console.log("App.js is running!");

// JSX - Javascript XML
var template = (
  <div>
    <h1> Indecision App! </h1>
    <p>Udemy course</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Sebastian Golbert</h1>
    <p>Age: 35</p>
    <p>Location: Münster, Germany</p>
  </div>
);

var appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
