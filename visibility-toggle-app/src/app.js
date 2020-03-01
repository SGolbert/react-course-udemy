console.log("App.js is running!");

const appRoot = document.getElementById("app");

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = { show: false };
  }

  onClickHandler() {
    this.setState(prev => {
      return {
        show: !prev.show
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.onClickHandler}>
          {this.state.show ? "Hide" : "Show"} details
        </button>
        {this.state.show ? <p>The hidden truth</p> : ""}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, appRoot);
