import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sample from "./components/Sample";
import ResponsiveDrawer from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveDrawer />
        <Switch>
          <Route path="/sample" exact component={Sample} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
