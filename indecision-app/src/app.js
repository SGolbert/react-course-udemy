console.log("App.js is running!");

const templateTitle = {
    title: "Indecision? Away!",
    subtitle: "resolving all your doubts",
    options: []
};

// JSX - Javascript XML
const template = (
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

let count = 0;

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

const appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);

function renderCounterApp() {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={substOne}>-1</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
