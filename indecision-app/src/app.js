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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Length: {this.props.options.length}</p>
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
  render() {
    return (
      <div>
        <form>
          <input type="text" name="option"></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
