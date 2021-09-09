import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Feature/Home";
import "./App.css";

export const App: React.FC<{}> = ({}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
