import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import blockTypes from '../templates/block_types.js'
import Draggable from 'react-draggable';

class Block extends Component {
  constructor(){
    super()
    this.checkPosition = this.checkPosition.bind(this);
  }
  checkPosition(){
    var node = ReactDOM.findDOMNode(this);
    console.log(window.getComputedStyle(node).transform);
  }

  render() {
    let testBlock = Object.values(blockTypes)[Math.floor(Math.random()*15)];    
    let renderBlock = [];
    testBlock.forEach((e) => {
      if (e) {
        renderBlock.push(
          <div className="block_clear">
            <div className = "block_filled">
            </div>
          </div>)
      } else {
        renderBlock.push(
          <div className="block_clear"></div>)
      }
    })
    return (
      <Draggable
        onDrag={this.checkPosition}
        onStop={this.props.checkBlockFit}
      >
      <div className="block">
        {renderBlock}
      </div>
      </Draggable>
    );
  }
}

export default Block;
