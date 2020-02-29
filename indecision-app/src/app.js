console.log("App.js is running!");

const templateTitle = {
  title: "Indecision? Away!",
  subtitle: "resolving all your doubts",
  options: []
};

// JSX - Javascript XML
var template = (
  <div>
    <h1>{templateTitle.title}</h1>
    {templateTitle.subtitle ? <p>{templateTitle.subtitle}</p> : ""}
    <p>
      {templateTitle.options.length > 0
        ? "Here are your options:"
        : "No options :("}
    </p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

const userObj = {
  name: "Erwin",
  age: 97,
  location: "Switzerland"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{userObj.name || "Anonymous"}</h1>
    {userObj.age >= 18 ? <p>Age: {userObj.age}</p> : ""}
    {getLocation(userObj.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
