import React, { Component } from 'react';
import './App.css';
import Board from './components/Board.js';
import Dock from './components/Dock.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      dock:[null, null, null],
      //0 = empty slot | 1 = full slot
      board:[
        [0,0,0,0,1,0,0,0,0,0], //1
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
    this.checkBlockFit = this.checkBlockFit.bind(this);
  }
  checkBlockFit(){
    let boardPositions = []
    document.querySelectorAll(".slot").forEach((e)=>{
      boardPositions.push([
              e.getBoundingClientRect().x-snapParam,
              e.getBoundingClientRect().x+snapParam,
              e.getBoundingClientRect().y-snapParam,
              e.getBoundingClientRect().y+snapParam,
              ]);
    });
    console.log(boardPositions)
    let blocks = [];
    document.querySelectorAll(".block_filled").forEach((e)=>{
      console.log(e)
      blocks.push([e.getBoundingClientRect().x, e.getBoundingClientRect().y]);
    })
  }
  
  render() {
    return (
      <div className="App">
       <div id="gameboard">
         <Dock checkBlockFit = {this.checkBlockFit}/>
         <Board />
       </div>
      </div>
    );
  }
}

export default App;
