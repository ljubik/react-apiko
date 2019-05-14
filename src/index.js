import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Router from "./scenes/Router";
import Api from "./api/Index";

class App extends React.Component {
  constructor(props) {
    super(props);
    Api.init();
    // Api.Auth.isLoggetIn;
  }

  render() {
    return (
      <div className="root">
        <Router />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
