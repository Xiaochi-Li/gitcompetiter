var React = require("react");
var Popular = require("./Popular");
import ReactRouter, {BrowserRouter, Route} from "react-router-dom";

import Nav from "./Nav.js";
import Home from "./Home.js";
import Battle from "./Battle.js"

class App extends React.Component {
  render() {
    console.log(Home);
    return (
      <BrowserRouter>
        <div className="container">
          <Nav/>
          <Route exact path="/" component={Home}/>
          <Route path="/popular" component={Popular}/>
          <Route path="/battle" component={Battle}/>
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
