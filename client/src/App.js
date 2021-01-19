import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Man from "./pages/Man";
import DragNDrop from "./components/DragNDrop";
import Workout from "./pages/Workout";
import Profile from "./pages/Profile"
import Social from "./pages/Social";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/signup"}>
          <Signup />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/plan"}>
          <DragNDrop />
        </Route>
        <Route exact path={"/workout"}>
          <Workout />
        </Route>
        <Route exact path={"/man"}>
          <Man />
        </Route>
        <Route exact path={"/social"}>
          <Social />
        </Route>
        <Route exact path={"/profile"}>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
