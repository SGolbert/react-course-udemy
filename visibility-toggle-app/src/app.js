console.log("App.js is running!");

const appRoot = document.getElementById("app");

let show = false;

function onClickHandler() {
  show = !show;
  renderTemplate();
}

function renderTemplate() {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onClickHandler}>{show ? "Hide" : "Show"} details</button>
      {show ? <p>The hidden truth</p> : ""}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderTemplate();
