import React, { useState, useEffect } from "react";
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm.js';
import SignupForm from './components/SignupForm.js';
import ErrorBoundary from "./components/ErrorBoundary.js";
import './App.css';
import UserContextProvider from "./components/UserContext.js";

function App() {
  //LOGIN FEATURE FOR CURRENT USER
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    fetch('/me')
      .then(response => {
        if(response.ok) {
          response.json()
          .then((user) => setCurrentUser(user))
        }
      })
  }, [])

  function onLogIn(loggedInUser) {
    setCurrentUser(loggedInUser)
  }

  function onLogOut(){
    setCurrentUser(null)
  }

  return (
    <UserContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <ErrorBoundary>
                <LoginForm onLogIn={onLogIn} />
                </ErrorBoundary>
            </Route>
            <Route exact path='/signup'>
              <SignupForm onLogIn={onLogIn}/>
            </Route>
            <Route path="/profile">
              <Profile onLogOut={onLogOut} currentUser={currentUser} />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContextProvider>
  );
}

export default App;

