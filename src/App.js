import React from "react";
import Nav from "./components/Nav/Nav";
import { useAuth0 } from "./react-auth0-spa";

import "./App.css";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Messages from "./views/Messages"
import ExternalApi from "./views/ExternalApi";
import Header from "./components/Header/Header"


function App() {
  
  const { loading } = useAuth0();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="App">
      <Router history={history}>
        <header>
          <Header />
          <div className="spacer"></div>
        </header>
        <nav>
        <Nav />
        </nav>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/messages" component={Messages} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </div>
  );



}

export default App;