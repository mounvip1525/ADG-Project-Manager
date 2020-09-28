import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Board from './containers/Board/Board'
library.add(faTrash);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Board />
      <div>Footer</div>
    </div>
  )
}

export default App;
