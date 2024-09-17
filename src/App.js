import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import PupperSearch from "./components/PupperSearch";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Route exact path="/">
        {isAuthenticated ? (
          <Redirect to="/pupper-search" />
        ) : (
          <Login isAuthenticated={setIsAuthenticated} />
        )}
      </Route>
      <Route path="/pupper-search">
        {isAuthenticated ? <PupperSearch /> : <Redirect to="/" />}
      </Route>
    </Router>
  );
};

export default App;
