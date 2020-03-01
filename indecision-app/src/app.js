class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json) || [];

      this.setState(() => ({ options: options }));
    } catch (e) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("Component unmounted!");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter a valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Duplicate option";
    }

    this.setState(prev => ({ options: prev.options.concat(option) }));
  }

  handleDeleteSingleOption(option) {
    const optionIndex = this.state.options.indexOf(option);
    this.state.options.splice(optionIndex, 1);
    this.setState(prev => ({ options: prev.options }));
  }

  render() {
    const title = "Indecision";
    const subtitle = "All your worries away!";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Default title"
};

const Action = props => {
  return (
    <div>
      {props.hasOptions ? (
        <button onClick={props.handlePick}>What should I do?</button>
      ) : (
        ""
      )}
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Clear list</button>
      {props.options.length == 0 && <p>Please enter some values</p>}
      <ol>
        {props.options.map(opt => (
          <Option
            key={opt}
            text={opt}
            handleDeleteSingleOption={props.handleDeleteSingleOption}
          />
        ))}
      </ol>
    </div>
  );
};

const Option = props => {
  return (
    <li>
      {props.text}{" "}
      <button onClick={e => props.handleDeleteSingleOption(props.text)}>
        Remove
      </button>
    </li>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { error: undefined };
  }

  handleSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) e.target.elements.option.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option"></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
