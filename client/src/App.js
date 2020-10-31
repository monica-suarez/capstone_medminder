import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Router from "./Router";
import LoginPage from "./Components/LoginPage/LoginPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  handleClick = (e) => {
    // e.preventDefault()
    this.setState({
      loggedIn: true,
    });
  };
  render() {
    return this.state.loggedIn ? (
      <div>
        {" "}
        <NavBar /> <Router />{" "}
      </div>
    ) : (
      <div className="App">
        <LoginPage onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
