import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board.js';
import Dock from './components/Dock.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      //0 = empty slot | 1 = full slot
      board:[
        [0,0,0,0,0,0,0,0,0,0], //1
        [0,0,0,0,0,0,0,0,0,0], //2
        [0,0,0,0,0,0,0,0,0,0], //3
        [0,0,0,0,0,0,0,0,0,0], //4
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
      ]
    }
  }
  render() {
    return (
      <div className="App">
       <div id="gameboard">
         <Dock />
         <Board />
       </div>
      </div>
    );
  }
}

export default App;
