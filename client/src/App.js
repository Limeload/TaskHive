import React, { useState, useEffect } from "react";
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm.js';
import SignupForm from './components/SignupForm.js';
import './App.css';
// import UserContextProvider from "./components/UserContext.js";

function App() {
  //LOGIN FEATURE FOR CURRENT USER
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  function onLogin(loggedInUser) {
    setCurrentUser(loggedInUser)
  }

  function onLogout(){
    setCurrentUser(null)
  }



  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
          <LoginForm onLogin={setCurrentUser} />
          </Route>
          <Route exact path='/signup'>
            <SignupForm onLogin={onLogin}/>
          </Route>
          <Route path="/profile">
            <Profile currentUser={currentUser} onLogout={onLogout}  />
          </Route>
        </Switch>
      </Router>
    </div>
);
}
export default App;

