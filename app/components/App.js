var React = require("react");
var Popular = require("./Popular");
import ReactRouter, {BrowserRouter, Route, Switch} from "react-router-dom";

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
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/popular" component={Popular}/>
            <Route exact path="/battle" component={Battle}/>
            <Route render={()=>{
              return(<div>not found</div>)
            }}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
