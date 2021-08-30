import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import "./App.css";

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
