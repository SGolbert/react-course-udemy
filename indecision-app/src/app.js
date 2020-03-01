class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "All your worries away!";
    const options = ["thing 1", "thing 2", "thing 33"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearList = this.handleClearList.bind(this);
  }

  handleClearList() {
    // alert("Clear list");
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClearList}>Clear list</button>
        <ol>
          {this.props.options.map(opt => (
            <Option key={opt} text={opt} />
          ))}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}

class AddOption extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    option && alert(option);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option"></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
