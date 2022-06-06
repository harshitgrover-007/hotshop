import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import product from "./components/data.json";
import Details from "./components/Details";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="APp">
      <Router>
        <Nav />
        <Switch>
          <Route path={`/products/product/details`}>
            <Details />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
