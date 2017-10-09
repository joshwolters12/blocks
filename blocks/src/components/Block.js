import React, { Component } from 'react';
import Slot from './Slot.js'
import blockTypes from '../templates/block_types.js'

class Block extends Component {
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
      <div className="block">
        {renderBlock}
      </div>
    );
  }
}

export default Block;
