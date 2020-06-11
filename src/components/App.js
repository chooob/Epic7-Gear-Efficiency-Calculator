import React from "react";
import Weapon from "./Weapon";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weapon" exact component={Weapon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
