import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginApp from "./components/LoginApp/LoginApp";
import Board from "./containers/Board/Board";
import Dashboard from "./containers/Dashboard/Dashboard";

library.add(faTrash);
library.add(faEdit);
library.add(faPlus);

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' component={LoginApp} exact />
        <Route path='/board' component={Board} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
