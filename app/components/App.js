var React = require("react");
var Popular = require("./Popular");
import Nav from "./Nav.js";
import Home from "./Home.js";
import { ReactRouter, BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    console.log(Home);
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <hr />
          <Route path="/popular" component={Popular} />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
