import React, { useState } from "react";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import PupperSearch from "./components/PupperSearch";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Route exact path="/">
        {isAuthenticated ? (
          <Navigate to="/pupper-search" />
        ) : (
          <Login isAuthenticated={setIsAuthenticated} />
        )}
      </Route>
      <Route path="/pupper-search">
        {isAuthenticated ? <PupperSearch /> : <Navigate to="/" />}
      </Route>
    </Router>
  );
};

export default App;
