import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sample from "./components/Sample";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Router>
        <Switch>
          <Route path="/sample" exact component={Sample} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
