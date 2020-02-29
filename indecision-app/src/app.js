console.log("App.js is running!");

const appData = {
    title: "Indecision? Away!",
    subtitle: "resolving all your doubts",
    options: ["one", "two"]
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted!");
    const option = e.target.elements.option.value;

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

const appRoot = document.getElementById("app");

function renderTemplate() {
    const template = (
        <div>
            <h1>{appData.title}</h1>
            {appData.subtitle ? <p>{appData.subtitle}</p> : ""}
            <p>
                {appData.options.length > 0
                    ? "Here are your options:"
                    : "No options :("}
            </p>
            <button onClick={resetList}>Reset list</button>
            <ol>
                {appData.options.map(opt => (
                    <li key={opt}>{opt}</li>
                ))}
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderTemplate();
