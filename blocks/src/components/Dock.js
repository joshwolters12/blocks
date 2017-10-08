import React, { Component } from 'react';
import Slot from './Slot.js';
import Block from './Block.js';

class Dock extends Component {
  render() {
    return (
      <div className="dock">
        Three Options Here
        <div className="dock_container" id="dock1">
          <Block />
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Dock;
