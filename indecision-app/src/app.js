console.log("App.js is running!");

const templateTitle = {
  title: "Indecision? Away!",
  subtitle: "resolving all your doubts"
};

// JSX - Javascript XML
var template = (
  <div>
    <h1>{templateTitle.title}</h1>
    <p>{templateTitle.subtitle}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

const userName = "Erwin";
const userAge = 97;
const userLocation = "Switzerland";

const userObj = {
  name: userName,
  age: userAge,
  location: userLocation
};

var templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
